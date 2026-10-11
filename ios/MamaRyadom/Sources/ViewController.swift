import UIKit
import WebKit

final class ViewController: UIViewController {

    private var webView: WKWebView!

    // MARK: – Setup

    override func loadView() {
        let config = WKWebViewConfiguration()

        // Serve bundled assets via custom scheme so localStorage works offline
        config.setURLSchemeHandler(LocalSchemeHandler(), forURLScheme: "app")

        // Persist user data across launches
        config.websiteDataStore = WKWebsiteDataStore.default()

        // Allow inline media; block autoplay of audio
        config.mediaTypesRequiringUserActionForPlayback = [.audio]

        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.allowsBackForwardNavigationGestures = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never  // we handle safe areas in CSS
        webView.scrollView.bounces = true

        // Set background before isOpaque to avoid black flash
        let isDarkBoot = UITraitCollection.current.userInterfaceStyle == .dark
        let bgColor = isDarkBoot
            ? UIColor(red: 0.09, green: 0.08, blue: 0.06, alpha: 1)
            : UIColor(red: 1.00, green: 0.98, blue: 0.94, alpha: 1)
        webView.backgroundColor = bgColor
        webView.scrollView.backgroundColor = bgColor
        if #available(iOS 15.0, *) {
            webView.underPageBackgroundColor = bgColor
        }
        webView.isOpaque = false

        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        applySystemBackground()
        loadApp()
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        if traitCollection.hasDifferentColorAppearance(comparedTo: previousTraitCollection) {
            applySystemBackground()
        }
    }

    private func applySystemBackground() {
        let isDark = traitCollection.userInterfaceStyle == .dark
        view.backgroundColor = isDark
            ? UIColor(red: 0.09, green: 0.08, blue: 0.06, alpha: 1)   // #17140F
            : UIColor(red: 1.00, green: 0.98, blue: 0.94, alpha: 1)   // #FFF9F0
    }

    private func loadApp() {
        let url = URL(string: "app://localhost/index.html")!
        webView.load(URLRequest(url: url))
    }
}

// MARK: – WKNavigationDelegate

extension ViewController: WKNavigationDelegate {

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        NSLog("❌ didFailProvisionalNavigation: \(error)")
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        NSLog("❌ didFail: \(error)")
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        NSLog("✅ didFinish: \(webView.url?.absoluteString ?? "nil")")
    }

    func webView(
        _ webView: WKWebView,
        decidePolicyFor action: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        guard let url = action.request.url else { decisionHandler(.allow); return }

        switch url.scheme {
        case "app", "about", "blob":
            decisionHandler(.allow)
        case "https", "http":
            // External links activated by the user go to Safari
            if action.navigationType == .linkActivated {
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        case "mailto", "tel", "instagram", "tg":
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
        default:
            decisionHandler(.cancel)
        }
    }
}

// MARK: – WKUIDelegate

extension ViewController: WKUIDelegate {

    /// window.open() → Safari
    func webView(
        _ webView: WKWebView,
        createWebViewWith configuration: WKWebViewConfiguration,
        for navigationAction: WKNavigationAction,
        windowFeatures: WKWindowFeatures
    ) -> WKWebView? {
        if let url = navigationAction.request.url {
            UIApplication.shared.open(url)
        }
        return nil
    }

    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in completionHandler() })
        present(alert, animated: true)
    }

    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Отмена", style: .cancel) { _ in completionHandler(false) })
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in completionHandler(true) })
        present(alert, animated: true)
    }

    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String,
                 defaultText: String?, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (String?) -> Void) {
        let alert = UIAlertController(title: nil, message: prompt, preferredStyle: .alert)
        alert.addTextField { $0.text = defaultText }
        alert.addAction(UIAlertAction(title: "Отмена", style: .cancel) { _ in completionHandler(nil) })
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in
            completionHandler(alert.textFields?.first?.text)
        })
        present(alert, animated: true)
    }
}
