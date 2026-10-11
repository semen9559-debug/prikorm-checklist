import Foundation
import WebKit

/// Serves bundled WebApp files over the custom `app://` URL scheme.
/// This avoids file:// restrictions while keeping all assets local and offline-ready.
final class LocalSchemeHandler: NSObject, WKURLSchemeHandler {

    private static let mimeTypes: [String: String] = [
        "html": "text/html; charset=utf-8",
        "css":  "text/css; charset=utf-8",
        "js":   "text/javascript; charset=utf-8",
        "mjs":  "text/javascript; charset=utf-8",
        "json": "application/json; charset=utf-8",
        "webmanifest": "application/manifest+json; charset=utf-8",
        "png":  "image/png",
        "jpg":  "image/jpeg",
        "jpeg": "image/jpeg",
        "svg":  "image/svg+xml",
        "ico":  "image/x-icon",
        "woff": "font/woff",
        "woff2":"font/woff2",
        "ttf":  "font/ttf",
        "txt":  "text/plain; charset=utf-8"
    ]

    private static let webAppRoot: URL = {
        Bundle.main.resourceURL!.appendingPathComponent("WebApp")
    }()

    func webView(_ webView: WKWebView, start urlSchemeTask: any WKURLSchemeTask) {
        let requestURL = urlSchemeTask.request.url!
        var path = requestURL.path
        if path == "/" || path.isEmpty { path = "/index.html" }

        let relativePath = path.hasPrefix("/") ? String(path.dropFirst()) : path
        let fileURL = Self.webAppRoot.appendingPathComponent(relativePath)

        guard
            fileURL.path.hasPrefix(Self.webAppRoot.path),   // path traversal guard
            let data = try? Data(contentsOf: fileURL)
        else {
            let err = NSError(domain: NSURLErrorDomain, code: NSURLErrorFileDoesNotExist)
            urlSchemeTask.didFailWithError(err)
            return
        }

        let ext = fileURL.pathExtension.lowercased()
        let mime = Self.mimeTypes[ext] ?? "application/octet-stream"

        let response = HTTPURLResponse(
            url: requestURL,
            statusCode: 200,
            httpVersion: "HTTP/1.1",
            headerFields: [
                "Content-Type": mime,
                "Content-Length": "\(data.count)",
                "Cache-Control": "no-cache"
            ]
        )!
        urlSchemeTask.didReceive(response)
        urlSchemeTask.didReceive(data)
        urlSchemeTask.didFinish()
    }

    func webView(_ webView: WKWebView, stop urlSchemeTask: any WKURLSchemeTask) {
        // Synchronous reads — nothing to cancel
    }
}
