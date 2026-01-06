const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/jar-viewer-app-B4peIdHc.js", "assets/vendor-libs-GpX5E6_3.js", "assets/vendor-ui-BLpUFD0p.js", "assets/vendor-analytics-B0BP_D2J.js", "assets/vendor-syntax-BwoFerex.js"]))) => i.map(i => d[i]);
import {j as e, r as i, L as J, d as K, b as re, M as oe, N as Qe, O as Q, P as Xe, Q as et, F as ve, T as tt, J as st, U as nt, V as it, W as at, X as rt, Y as B, Z as ot, R as lt, $ as ct} from "./vendor-libs-GpX5E6_3.js";
import {S as dt, o as mt, _ as ht} from "./vendor-syntax-BwoFerex.js";
import {M as ut, u as H, g as le, J as pt, A as ce, I as we, B as F, D as ft, a as gt, b as xt, c as yt, d as bt, L as pe, T as vt, e as wt, f as Y, h as je, i as jt, j as $, k as Nt, l as At, P as Jt, m as kt} from "./jar-viewer-app-B4peIdHc.js";
import {H as Ne, J as St, aB as Rt, Y as de, aC as fe, az as Ct, r as W, l as X, u as Tt, o as Ae, i as Je, I as G, V as Ft, h as It, aD as te, aE as se, aF as Dt, k as ke, aG as Se, aH as Et, _ as Re, L as Ce, A as ne, aI as Te, aJ as Fe, E as _t, aK as ge, x as Pt, aL as Mt, aM as xe, s as zt, av as Ot, aN as Lt, aO as Ut, aP as Bt, aQ as Wt, aR as Vt, aS as Yt, aT as qt, U as Ie, aU as Ht, j as ie, p as Z, aV as $t, g as Gt, B as Zt, a0 as Kt} from "./vendor-ui-BLpUFD0p.js";
import {u as q, P as Qt} from "./vendor-analytics-B0BP_D2J.js";
(function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        l(n);
    new MutationObserver(n => {
        for (const r of n)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && l(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity),
        n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function l(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const r = t(n);
        fetch(n.href, r)
    }
}
)();
const _ = ({icon: s, title: c, description: t, readMoreLink: l, isNew: n}) => e.jsxs("div", {
    className: "bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full relative overflow-hidden",
    children: [n && e.jsx("div", {
        className: "absolute top-2 -right-10 bg-red-500 text-white text-xs font-semibold py-1 px-10 transform rotate-45 shadow-md z-10",
        children: "NEW"
    }), e.jsx("div", {
        className: "text-jar-500 mb-4 bg-jar-50 rounded-full w-12 h-12 flex items-center justify-center",
        children: s
    }), e.jsx("h3", {
        className: "text-xl font-semibold mb-2 text-gray-800",
        children: c
    }), e.jsxs("p", {
        className: "text-gray-600",
        children: [t, l && e.jsx("a", {
            href: l,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline font-semibold ml-1",
            children: "(read more)"
        })]
    })]
})
  , Xt = () => e.jsxs(e.Fragment, {
    children: [e.jsx("h2", {
        className: "text-2xl font-bold text-gray-800 mb-6 text-center",
        children: "Powerful Features for Java Developers"
    }), e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
        children: [e.jsx(_, {
            icon: e.jsx(Ne, {
                size: 24,
                className: "text-orange-600"
            }),
            title: "Java Properties Editor",
            description: "Professional properties file editor with validation, formatting, duplicate key detection, encoding support, and export to JSON/YAML/ENV formats.",
            isNew: !0
        }), e.jsx(_, {
            icon: e.jsx(ut, {
                width: 24,
                height: 24
            }),
            title: "Minecraft Mod Explorer",
            description: "Perfect for exploring Minecraft mods! View assets, textures, recipes, data files, and decompile mod code. Supports Forge, Fabric, Quilt, and NeoForge mods.",
            readMoreLink: "/kb/how-to-view-minecraft-mods-jar-tools",
            isNew: !0
        }), e.jsx(_, {
            icon: e.jsx(St, {
                size: 24,
                className: "text-blue-600"
            }),
            title: "JAR Bytecode Viewer",
            description: "Decompile Java class files directly from JAR archives. View compiled bytecode as readable source code to understand JAR internals.",
            readMoreLink: "/kb/how-to-decompile-class-files",
            isNew: !0
        })]
    }), e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
        children: [e.jsx(_, {
            icon: e.jsx(Rt, {
                size: 24,
                className: "text-orange-500"
            }),
            title: "Public Decompilation API",
            description: "Direct API endpoint for decompiling .class files programmatically. No authentication required - perfect for scripts and automation.",
            readMoreLink: "/kb/programmatic-api-access"
        }), e.jsx(_, {
            icon: e.jsx(de, {
                size: 24,
                className: "text-green-600"
            }),
            title: "Professional JSON Editor",
            description: "Advanced JSON validation, auto-formatting, and minification tools with precise error highlighting."
        }), e.jsx(_, {
            icon: e.jsx(fe, {
                size: 24,
                className: "text-teal-500"
            }),
            title: "JAR Extractor",
            description: "Easily convert your entire JAR to a ZIP file or download individual files and folders directly from browser.",
            readMoreLink: "/kb/how-to-convert-jar-to-zip"
        })]
    }), e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
        children: [e.jsx(_, {
            icon: e.jsx(Ct, {
                size: 24,
                className: "text-purple-500"
            }),
            title: "Java Constants Editing",
            description: "Inspect and modify hardcoded literal strings like URLs, file paths, etc. with our jar string editor",
            readMoreLink: "/kb/using-string-constants-view"
        }), e.jsx(_, {
            icon: e.jsx(W, {
                size: 24
            }),
            title: "Advanced File Browser",
            description: "Hierarchical file tree with expandable directories, horizontal scrolling, and resizable panel for better navigation",
            readMoreLink: "/kb/open-jar-file-online"
        }), e.jsx(_, {
            icon: e.jsx(fe, {
                size: 24
            }),
            title: "Class File Handling",
            description: "Special visualization for class files with readable string content display and dedicated viewer",
            readMoreLink: "/kb/jar-file-internals"
        })]
    }), e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
        children: [e.jsx(_, {
            icon: e.jsx(X, {
                size: 24
            }),
            title: "Edit & Download",
            description: "Save your modified JAR with automatic renaming using our jar editor online and download individual files",
            readMoreLink: "/kb/how-to-download-modified-jar"
        }), e.jsx(_, {
            icon: e.jsx(Tt, {
                size: 24
            }),
            title: "Search Inside Archive",
            description: "Quickly find files within the archive. A key feature for any comprehensive jar viewer online."
        }), e.jsx(_, {
            icon: e.jsx(Ae, {
                size: 24
            }),
            title: "Secure & Private",
            description: "Your files are processed directly in your browser. No server uploads needed for your jar file edit.",
            readMoreLink: "/kb/security"
        })]
    }), e.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
        children: e.jsx(_, {
            icon: e.jsx(Je, {
                size: 24
            }),
            title: "JAR Content Editing",
            description: "Edit all text files within a single JAR file including MANIFEST.MF, JSON, XML, properties, and configuration files directly in your browser."
        })
    })]
})
  , es = ({poster: s, webmSrc: c, mp4Src: t, className: l="", caption: n}) => {
    const r = i.useRef(null)
      , a = i.useRef(null)
      , [d,p] = i.useState(!1);
    return i.useEffect( () => {
        const o = r.current;
        if (!o)
            return;
        const m = new IntersectionObserver(u => {
            u[0].isIntersecting && (p(!0),
            a.current && a.current.play().catch( () => {}
            ),
            m.disconnect())
        }
        ,{
            rootMargin: "200px 0px"
        });
        return m.observe(o),
        () => m.disconnect()
    }
    , []),
    e.jsxs("div", {
        ref: r,
        className: l,
        children: [e.jsxs("video", {
            ref: a,
            className: "w-full rounded-xl bg-black",
            poster: s,
            muted: !0,
            playsInline: !0,
            loop: !0,
            controls: !0,
            preload: d ? "auto" : "none",
            "aria-label": "Product demo showing upload, browse, edit, export flow",
            children: [d && e.jsxs(e.Fragment, {
                children: [c ? e.jsx("source", {
                    src: c,
                    type: "video/webm"
                }) : null, t ? e.jsx("source", {
                    src: t,
                    type: "video/mp4"
                }) : null]
            }), "Your browser does not support the video tag."]
        }), n && e.jsx("p", {
            className: "mt-2 text-xs text-gray-500",
            children: n
        })]
    })
}
  , ts = () => {
    const [s,c] = i.useState(!1)
      , t = i.useRef(null);
    i.useEffect( () => {
        const n = new IntersectionObserver(r => {
            r.forEach(a => {
                a.isIntersecting && (c(!0),
                n.disconnect())
            }
            )
        }
        ,{
            threshold: .1
        });
        return t.current && n.observe(t.current),
        () => n.disconnect()
    }
    , []);
    const l = ({poster: n, sources: r}) => s ? e.jsxs("video", {
        controls: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        className: "w-full h-auto",
        poster: n,
        children: [r.map( (a, d) => e.jsx("source", {
            src: a.src,
            type: a.type
        }, d)), "Your browser does not support the video tag."]
    }) : e.jsx("div", {
        className: "aspect-video bg-gray-900 flex items-center justify-center",
        children: n ? e.jsx("img", {
            src: n,
            alt: "Video thumbnail",
            className: "w-full h-full object-cover"
        }) : e.jsx("div", {
            className: "text-gray-400",
            children: "Loading video..."
        })
    });
    return e.jsxs("div", {
        id: "whats-new",
        className: "mb-8 scroll-mt-20",
        ref: t,
        children: [e.jsx("h2", {
            className: "text-2xl font-bold text-gray-800 mb-6 text-center",
            children: "What's New?"
        }), e.jsx("div", {
            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
            children: e.jsxs("ul", {
                className: "space-y-8 divide-y divide-gray-100",
                children: [e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsxs("div", {
                        className: "flex items-start",
                        children: [e.jsx("div", {
                            className: "flex-shrink-0 mt-1",
                            children: e.jsx("span", {
                                className: "text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold",
                                children: "NEW"
                            })
                        }), e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsxs("h4", {
                                className: "text-lg font-bold text-gray-800 flex items-center",
                                children: [e.jsx(G, {
                                    size: 20,
                                    className: "mr-2 text-gray-600"
                                }), "Standalone Class Decompiler with Sharing"]
                            }), e.jsx("p", {
                                className: "text-gray-600 mt-1",
                                children: "Dedicated page for decompiling individual Java .class files with secure sharing capabilities. Upload, decompile, and share your results with colleagues through time-limited secure links that expire after 24 hours."
                            }), e.jsx("div", {
                                className: "my-3 rounded-lg overflow-hidden shadow-md border border-gray-200",
                                children: e.jsx("img", {
                                    src: "/images/class-decompiler.png",
                                    alt: "Class Decompiler interface showing upload area for Java .class files with drag & drop functionality",
                                    className: "w-full h-auto"
                                })
                            }), e.jsxs("div", {
                                className: "mt-3 space-y-2",
                                children: [e.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [e.jsx("span", {
                                        className: "w-2 h-2 bg-gray-400 rounded-full mr-2"
                                    }), "Direct .class file upload with magic byte validation"]
                                }), e.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [e.jsx("span", {
                                        className: "w-2 h-2 bg-gray-400 rounded-full mr-2"
                                    }), "On-demand sharing with secure server-side storage"]
                                }), e.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [e.jsx("span", {
                                        className: "w-2 h-2 bg-gray-400 rounded-full mr-2"
                                    }), "Copy-to-clipboard functionality for easy sharing"]
                                }), e.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [e.jsx("span", {
                                        className: "w-2 h-2 bg-gray-400 rounded-full mr-2"
                                    }), "24-hour expiration for privacy and security"]
                                })]
                            }), e.jsxs("div", {
                                className: "mt-4",
                                children: [e.jsxs(J, {
                                    to: "/class-decompiler",
                                    className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
                                    children: [e.jsx(G, {
                                        size: 18,
                                        className: "mr-2"
                                    }), "Try Class Decompiler →"]
                                }), e.jsx("p", {
                                    className: "text-sm text-gray-500 mt-2",
                                    children: "Decompile individual .class files instantly"
                                })]
                            })]
                        })]
                    })
                }), e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsx("div", {
                        className: "flex items-start",
                        children: e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsxs("h4", {
                                className: "text-lg font-bold text-gray-800 flex items-center",
                                children: [e.jsx(Ne, {
                                    size: 20,
                                    className: "mr-2 text-orange-600"
                                }), "Java Properties Editor Online"]
                            }), e.jsx("p", {
                                className: "text-gray-600 mt-1",
                                children: "Professional properties file editor with validation, formatting, and export capabilities. Features include duplicate key detection, encoding support (UTF-8/ISO-8859-1), and export to JSON/YAML/ENV formats."
                            }), e.jsx("div", {
                                className: "my-3 rounded-lg overflow-hidden shadow-md border border-gray-200",
                                children: e.jsx(l, {
                                    sources: [{
                                        src: "/video/java-properties-editor.mp4",
                                        type: "video/mp4"
                                    }, {
                                        src: "/video/java-properties-editor.webm",
                                        type: "video/webm"
                                    }]
                                })
                            })]
                        })
                    })
                }), e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsx("div", {
                        className: "flex items-start",
                        children: e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsxs("h4", {
                                className: "text-lg font-bold text-gray-800 flex items-center",
                                children: [e.jsx(Ft, {
                                    size: 20,
                                    className: "mr-2 text-blue-600"
                                }), "Enhanced Image Viewer"]
                            }), e.jsx("p", {
                                className: "text-gray-600 mt-1",
                                children: "Preview images directly within JAR files with our new dedicated image viewer. View PNG, JPG, GIF, BMP, WebP, SVG, and ICO formats with metadata display including dimensions and file size information."
                            }), e.jsx("div", {
                                className: "my-3 rounded-lg overflow-hidden shadow-md border border-gray-200",
                                children: e.jsx("img", {
                                    src: "/images/image-viewer.png",
                                    alt: "Enhanced Image Viewer showing GeckoLib JAR file with image preview and metadata",
                                    className: "w-full h-auto"
                                })
                            })]
                        })
                    })
                }), e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsx("div", {
                        className: "flex items-start",
                        children: e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsxs("h4", {
                                className: "text-lg font-bold text-gray-800 flex items-center",
                                children: [e.jsx(de, {
                                    size: 20,
                                    className: "mr-2 text-purple-600"
                                }), "Advanced JSON Editor"]
                            }), e.jsx("p", {
                                className: "text-gray-600 mt-1",
                                children: "Our JSON editor now includes professional validation, auto-formatting, and minification tools. You can validate syntax with precise error highlighting, beautify your JSON with proper indentation, and compress files by removing unnecessary whitespace."
                            }), e.jsx("div", {
                                className: "my-3 rounded-lg overflow-hidden shadow-md border border-gray-200",
                                children: e.jsx(l, {
                                    sources: [{
                                        src: "/video/json-features.mp4",
                                        type: "video/mp4"
                                    }, {
                                        src: "/video/json-features.webm",
                                        type: "video/webm"
                                    }]
                                })
                            })]
                        })
                    })
                }), e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsx("div", {
                        className: "flex items-start",
                        children: e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsx("h4", {
                                className: "text-lg font-bold text-gray-800",
                                children: "Programmatic API Access"
                            }), e.jsxs("p", {
                                className: "text-gray-600 mt-1",
                                children: ["For developers and power users, we've launched a public API to decompile ", e.jsx("code", {
                                    children: ".class"
                                }), " files. Automate your workflows with a simple `cURL` command."]
                            }), e.jsx("div", {
                                className: "bg-gray-800 text-white p-4 my-3 rounded-lg text-sm font-mono overflow-x-auto",
                                children: e.jsx("pre", {
                                    children: e.jsx("code", {
                                        children: `curl -f -X POST https://jar.tools/api/v1/decompile \\
  -F "file=@/path/to/your/Compiler.class" \\
  -o Compiler.java`
                                    })
                                })
                            }), e.jsx(J, {
                                to: "/kb/programmatic-api-access",
                                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mt-2 inline-block",
                                children: "View Full API Documentation →"
                            })]
                        })
                    })
                }), e.jsx("li", {
                    className: "pt-8 first:pt-0",
                    children: e.jsx("div", {
                        className: "flex items-start",
                        children: e.jsxs("div", {
                            className: "ml-4",
                            children: [e.jsx("h4", {
                                className: "text-lg font-bold text-gray-800",
                                children: "JAR Class File Decompilation"
                            }), e.jsxs("p", {
                                className: "text-gray-600 mt-1",
                                children: ["Browse JAR archives and decompile Java class files directly in your browser. Extract readable source code from compiled ", e.jsx("code", {
                                    children: ".class"
                                }), " files found within JAR archives, making it easy to understand and analyze Java applications."]
                            }), e.jsx("div", {
                                className: "my-3 rounded-lg overflow-hidden shadow-md border border-gray-200",
                                children: e.jsx(l, {
                                    poster: "/images/decompile-class-file.png",
                                    sources: [{
                                        src: "/video/decompile.mp4",
                                        type: "video/mp4"
                                    }, {
                                        src: "/video/decompile.webm",
                                        type: "video/webm"
                                    }]
                                })
                            }), e.jsx(J, {
                                to: "/kb/how-to-decompile-class-files",
                                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mt-2 inline-block",
                                children: "Learn more about the decompiler →"
                            })]
                        })
                    })
                })]
            })
        })]
    })
}
  , ss = ({faqItems: s, className: c=""}) => {
    const [t,l] = i.useState(new Set)
      , n = r => {
        l(a => {
            const d = new Set(a);
            return d.has(r) ? d.delete(r) : d.add(r),
            d
        }
        )
    }
    ;
    return e.jsxs("div", {
        className: `max-w-3xl mx-auto mt-16 ${c}`,
        id: "faq",
        children: [e.jsx("h2", {
            className: "text-2xl font-bold text-gray-800 mb-6 text-center",
            children: "Frequently Asked Questions"
        }), e.jsx("div", {
            className: "space-y-4",
            children: s.map(r => e.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-lg p-4",
                children: [e.jsxs("button", {
                    onClick: () => n(r.id),
                    className: "w-full flex items-center justify-between text-left hover:text-jar-600",
                    children: [e.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: r.question
                    }), e.jsx("span", {
                        className: `text-gray-400 transition-transform ${t.has(r.id) ? "rotate-180" : ""}`,
                        children: "▼"
                    })]
                }), t.has(r.id) && e.jsx("div", {
                    className: "text-gray-600 mt-3",
                    children: r.answer
                })]
            }, r.id))
        })]
    })
}
  , ee = () => e.jsx("footer", {
    className: "bg-white border-t border-gray-100 py-8 mt-auto",
    children: e.jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [e.jsxs("div", {
            className: "mb-4",
            children: [e.jsx(J, {
                to: "/",
                className: "text-sm text-blue-600 hover:text-blue-800 hover:underline mx-2 font-bold",
                children: "JAR Viewer"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx(J, {
                to: "/class-decompiler",
                className: "text-sm text-purple-600 hover:text-purple-800 hover:underline mx-2 font-bold",
                children: "Class Decompiler"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx(J, {
                to: "/jar-decompiler",
                className: "text-sm text-green-600 hover:text-green-800 hover:underline mx-2 font-bold",
                children: "JAR Decompiler"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx(J, {
                to: "/kb",
                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mx-2",
                children: "Knowledge Base"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx(J, {
                to: "/kb/security",
                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mx-2",
                children: "Security"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx("button", {
                onClick: () => {
                    const s = document.getElementById("pricing");
                    s && s.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
                ,
                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mx-2",
                children: "Pricing"
            }), e.jsx("span", {
                className: "text-gray-300 mx-1",
                children: "|"
            }), e.jsx("a", {
                href: "mailto:igor@igorstechnoclub.com",
                className: "text-sm text-jar-600 hover:text-jar-800 hover:underline mx-2",
                children: "Business Inquiries"
            })]
        }), e.jsxs("p", {
            className: "text-sm text-gray-500",
            children: ["© ", new Date().getFullYear(), " JAR Tools — Your trusted tool to View, Edit and Decompile JAR Files."]
        }), e.jsxs("p", {
            className: "mt-3 text-sm text-gray-500",
            children: ["Made by Igor at ", e.jsx("a", {
                className: "igorstechnoclub",
                href: "https://igorstechnoclub.com",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Igor's Techno Club"
            })]
        })]
    })
})
  , ns = [{
    id: 1,
    question: "How to decompile Java online?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "To decompile Java class files online using JAR Tools:"
        }), e.jsxs("ol", {
            className: "list-decimal pl-6 space-y-2",
            children: [e.jsx("li", {
                children: "Upload your JAR file using the drag-and-drop interface or file selector"
            }), e.jsx("li", {
                children: "Navigate to any .class file in the file browser"
            }), e.jsxs("li", {
                children: ["Click the ", e.jsx("em", {
                    children: "Decompile"
                }), " button in the ClassViewer to convert bytecode to readable Java source"]
            }), e.jsx("li", {
                children: "View the decompiled code with syntax highlighting and copy what you need"
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Easy to Use: Simply click the decompile button and view the readable Java source code instantly.", e.jsx("br", {}), "Accurate Results: Professional-grade decompilation for reliable code analysis."]
            })
        })]
    })
}, {
    id: 2,
    question: "Can I edit JAR files?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "Yes! JAR Tools provides comprehensive editing capabilities for JAR files:"
        }), e.jsxs("div", {
            className: "space-y-4 mt-6",
            children: [e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "What You Can Edit:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "Text files - Properties, XML, configuration files, manifest files"
                    }), e.jsx("li", {
                        children: "JSON files - Advanced JSON editor with validation and formatting"
                    }), e.jsx("li", {
                        children: "String constants - Extract and modify strings from .class files"
                    }), e.jsx("li", {
                        children: "Image files - View and replace images, textures, icons"
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "How It Works:"
                }), e.jsxs("ol", {
                    className: "list-decimal pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "Upload your JAR file and browse the file tree"
                    }), e.jsx("li", {
                        children: "Click on any editable file (marked with green icons for text files)"
                    }), e.jsx("li", {
                        children: "Edit content directly in the browser with syntax highlighting"
                    }), e.jsxs("li", {
                        children: ["Click ", e.jsx("em", {
                            children: "Save"
                        }), " - modifications are tracked in memory"]
                    }), e.jsxs("li", {
                        children: ["Download your modified JAR or click ", e.jsx("em", {
                            children: "Export"
                        }), " to extract as ZIP format"]
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Safe & Private: All editing happens in your browser - no files uploaded to servers.", e.jsx("br", {}), "Non-destructive: Original JAR remains unchanged until you explicitly download the modified version, plus all changes are reversible."]
            })
        })]
    })
}, {
    id: 3,
    question: "Do I need to download a JAR file editor?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "No! JAR Tools is a completely web-based application that runs entirely in your browser:"
        }), e.jsxs("div", {
            className: "space-y-4 mt-6",
            children: [e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Zero Installation Required:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "No downloads - Works instantly in any modern web browser"
                    }), e.jsx("li", {
                        children: "No Java installation - No need for JDK, JRE, or command-line tools"
                    }), e.jsx("li", {
                        children: "No software setup - No WinRAR, 7-Zip, or specialized JAR editors"
                    }), e.jsx("li", {
                        children: "Cross-platform - Works on Windows, Mac, Linux, and mobile devices"
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Instant Access:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "Open jar.tools in your browser"
                    }), e.jsx("li", {
                        children: "Drag and drop your JAR file"
                    }), e.jsx("li", {
                        children: "Start editing immediately"
                    }), e.jsx("li", {
                        children: "No account creation or registration needed"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Modern Web Technology: Built with cutting-edge browser APIs for file processing.", e.jsx("br", {}), "Private & Secure: All JAR processing happens locally in your browser - your files never leave your device."]
            })
        })]
    })
}, {
    id: 4,
    question: "Can I decompile JAR online?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "Yes! JAR Tools provides powerful online Java decompilation for each class file in your JAR:"
        }), e.jsxs("div", {
            className: "space-y-4 mt-6",
            children: [e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Via User Interface:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "Upload JAR file and browse to any .class file"
                    }), e.jsxs("li", {
                        children: ["Click ", e.jsx("em", {
                            children: "Decompile"
                        }), " button in the ClassViewer interface"]
                    }), e.jsx("li", {
                        children: "View source code with syntax highlighting and proper formatting"
                    }), e.jsx("li", {
                        children: "Copy or analyze the decompiled Java source code"
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Via Direct API:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsxs("li", {
                        children: ["Public endpoint: ", e.jsx("code", {
                            className: "bg-gray-100 px-2 py-1 rounded text-sm",
                            children: "POST /api/v1/decompile"
                        })]
                    }), e.jsx("li", {
                        children: "Upload .class files directly via multipart form data"
                    }), e.jsx("li", {
                        children: "Get Java source as plain text response"
                    }), e.jsx("li", {
                        children: "Perfect for automation and scripting workflows"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Professional Decompiler: Powered by advanced decompilation technology for accurate results.", e.jsx("br", {}), "Flexible Access: Use the web interface for quick analysis or integrate the API into your development workflow."]
            })
        }), e.jsxs("div", {
            className: "bg-gray-50 p-3 rounded border mt-6",
            children: [e.jsx("p", {
                className: "text-sm text-gray-700 mb-2",
                children: "API Example:"
            }), e.jsxs("code", {
                className: "text-xs text-gray-600 block",
                children: ["curl -f -o MyClass.java -X POST https://jar.tools/api/v1/decompile \\", e.jsx("br", {}), '  -F "file=@/path/to/MyClass.class"']
            })]
        })]
    })
}, {
    id: 5,
    question: "How to extract JAR file?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "space-y-3",
            children: [e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Individual Files:"
                }), e.jsxs("ol", {
                    className: "list-decimal pl-6 space-y-1",
                    children: [e.jsx("li", {
                        children: "Upload JAR and navigate to any file"
                    }), e.jsx("li", {
                        children: "Click the download icon in the file viewer"
                    }), e.jsx("li", {
                        children: "File downloads with original name"
                    })]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Entire JAR:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-6 space-y-1",
                    children: [e.jsxs("li", {
                        children: [e.jsx("em", {
                            children: "Export"
                        }), " button extracts all contents as ZIP file"]
                    }), e.jsx("li", {
                        children: "Preserves folder structure and file hierarchy"
                    }), e.jsx("li", {
                        children: "Includes any modifications you've made"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Quick Tip: Use ", e.jsx("em", {
                    children: "Export"
                }), " to get all JAR contents in a standard archive format that any computer can open."]
            })
        })]
    })
}, {
    id: 6,
    question: "How to convert JAR to ZIP?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "JAR Tools offers two ways to convert JAR to ZIP:"
        }), e.jsxs("div", {
            className: "space-y-4 mt-6",
            children: [e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Option 1: Export ZIP (Preserve Classes)"
                }), e.jsxs("ol", {
                    className: "list-decimal pl-6 space-y-2",
                    children: [e.jsx("li", {
                        children: "Upload your JAR file using the drag-and-drop interface"
                    }), e.jsxs("li", {
                        children: ["Click ", e.jsx("em", {
                            children: "Export JAR"
                        }), " button in the header (appears once JAR is loaded)"]
                    }), e.jsxs("li", {
                        children: ["Choose ", e.jsx("em", {
                            children: "ZIP"
                        }), " format in the dialog"]
                    }), e.jsx("li", {
                        children: "Download begins automatically with .zip extension"
                    })]
                }), e.jsx("div", {
                    className: "bg-green-50 p-3 rounded border-l-4 border-green-400 mt-3",
                    children: e.jsx("p", {
                        className: "text-sm text-green-800",
                        children: "What You Get: Identical file structure with .zip extension - .class files remain as bytecode."
                    })
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h4", {
                    className: "text-gray-700 mb-2 uppercase",
                    children: "Option 2: JAR Decompiler (Source Code ZIP)"
                }), e.jsxs("ol", {
                    className: "list-decimal pl-6 space-y-2",
                    children: [e.jsxs("li", {
                        children: ["Visit the ", e.jsx("a", {
                            href: "/jar-decompiler",
                            className: "text-jar-600 hover:text-jar-800 underline",
                            children: "JAR Decompiler page"
                        })]
                    }), e.jsx("li", {
                        children: "Upload your JAR file for bulk decompilation"
                    }), e.jsx("li", {
                        children: "Download organized ZIP file with .java source files"
                    })]
                }), e.jsx("div", {
                    className: "bg-green-50 p-3 rounded border-l-4 border-green-400 mt-3",
                    children: e.jsx("p", {
                        className: "text-sm text-green-800",
                        children: "What You Get: ZIP with .class files converted to readable .java source code files."
                    })
                })]
            })]
        }), e.jsxs("div", {
            className: "space-y-2 mt-6",
            children: [e.jsx("h4", {
                className: "text-gray-700 text-sm uppercase",
                children: "Which Option Should I Choose?"
            }), e.jsxs("ul", {
                className: "list-disc pl-6 space-y-1 text-sm text-gray-600",
                children: [e.jsx("li", {
                    children: "Export ZIP: Need original bytecode preserved, making edits to non-class files"
                }), e.jsx("li", {
                    children: "JAR Decompiler: Want readable source code, code analysis, or learning purposes"
                }), e.jsx("li", {
                    children: "Both create universal .zip files that open on any computer without Java"
                })]
            })]
        })]
    })
}, {
    id: 7,
    question: "Can I edit class files?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "Partially, yes. While you can't directly edit compiled .class files, you can work with string constants and source code:"
        }), e.jsxs("div", {
            className: "space-y-3 mt-6",
            children: [e.jsx("h4", {
                className: "text-gray-700 mb-2 uppercase",
                children: "What You Can Do:"
            }), e.jsxs("ol", {
                className: "list-decimal pl-6 space-y-2",
                children: [e.jsx("li", {
                    children: "Edit string constants - Use the String Editor to modify text values in .class files"
                }), e.jsxs("li", {
                    children: ["Decompile .class files using the ", e.jsx("em", {
                        children: "Decompile"
                    }), " button in ClassViewer"]
                }), e.jsx("li", {
                    children: "Copy the Java source code from the decompiled output"
                }), e.jsx("li", {
                    children: "Save locally to a new file with .java extension for external editing"
                }), e.jsx("li", {
                    children: "Download modified JAR with your string constant changes"
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Limitation: You cannot directly modify compiled bytecode.", e.jsx("br", {}), "String Editing: You can modify string constants within .class files and download the updated JAR."]
            })
        }), e.jsxs("div", {
            className: "space-y-2 mt-6",
            children: [e.jsx("h4", {
                className: "text-gray-700 text-sm uppercase",
                children: "What You Can Do:"
            }), e.jsxs("ul", {
                className: "list-disc pl-6 space-y-1 text-sm text-gray-600",
                children: [e.jsxs("li", {
                    children: ["Edit string constants - Modify text values in .class files and click ", e.jsx("em", {
                        children: "Save"
                    })]
                }), e.jsx("li", {
                    children: "Analyze code structure - Study decompiled source to understand functionality"
                }), e.jsx("li", {
                    children: "Extract methods - Copy specific methods or classes for reference"
                }), e.jsx("li", {
                    children: "Download modifications - Get your JAR with updated string constants"
                })]
            })]
        })]
    })
}, {
    id: 8,
    question: "Can you implement [any feature]?",
    answer: e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "Yes! I'm always open to implementing new features that would benefit JAR Tools users:"
        }), e.jsxs("div", {
            className: "space-y-3 mt-6",
            children: [e.jsx("h4", {
                className: "text-gray-700 mb-2 uppercase",
                children: "How to Request Features:"
            }), e.jsxs("div", {
                className: "space-y-3",
                children: [e.jsxs("div", {
                    children: [e.jsx("p", {
                        className: "font-medium text-gray-700",
                        children: "Email Contact:"
                    }), e.jsx("a", {
                        href: "mailto:igor@igorstechnoclub.com",
                        className: "text-jar-600 hover:text-jar-800 hover:underline",
                        children: "igor@igorstechnoclub.com"
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("p", {
                        className: "font-medium text-gray-700",
                        children: "Feedback Form:"
                    }), e.jsx("a", {
                        href: "https://docs.google.com/forms/d/1Bg3qZrhzY_q661lyxopVzbN7gMYeZquFAZy3YsdxEY8",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-jar-600 hover:text-jar-800 hover:underline",
                        children: "Submit Feature Request Form"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-6",
            children: e.jsxs("p", {
                className: "text-sm text-green-800",
                children: ["Feature Ideas Welcome: JAR analysis tools, new file format support, automation features, UI improvements.", e.jsx("br", {}), "Quick Response: I typically respond to feature requests within 24-48 hours."]
            })
        }), e.jsxs("div", {
            className: "space-y-2 mt-6",
            children: [e.jsx("h4", {
                className: "text-gray-700 text-sm uppercase",
                children: "When Requesting Features:"
            }), e.jsxs("ul", {
                className: "list-disc pl-6 space-y-1 text-sm text-gray-600",
                children: [e.jsx("li", {
                    children: "Describe your use case - What are you trying to accomplish?"
                }), e.jsx("li", {
                    children: "Explain the workflow - How would this feature fit into your process?"
                }), e.jsx("li", {
                    children: "Provide examples - Sample files or scenarios help me understand better"
                }), e.jsx("li", {
                    children: "Mention urgency - Is this a nice-to-have or critical for your work?"
                })]
            })]
        })]
    })
}]
  , is = () => {
    const s = K()
      , {isProUser: c} = H()
      , [t,l] = i.useState(!1)
      , [n] = i.useState( () => le())
      , [r,a] = i.useState(!1);
    i.useEffect( () => {
        const o = localStorage.getItem("freeProKeyModalCompleted");
        a(o === "true")
    }
    , []);
    const d = (o, m) => {
        if (o.name.toLowerCase().endsWith(".class")) {
            s("/class-decompiler", {
                state: {
                    uploadedFile: o,
                    fromJarUploader: !0
                }
            });
            return
        }
        s("/jar-viewer", {
            state: {
                jarFile: o,
                isReadOnly: m || !1
            }
        })
    }
      , p = o => {
        const m = document.getElementById(o);
        m && m.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    ;
    return e.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [e.jsx("header", {
            className: "container mx-auto py-8 px-4",
            children: e.jsxs("div", {
                className: "flex flex-col items-center text-center max-w-3xl mx-auto animate-slide-down",
                children: [e.jsx("div", {
                    className: "bg-jar-100 rounded-full p-3 mb-4",
                    children: e.jsx("img", {
                        src: "images/jar-file-editor-icon.svg",
                        alt: "JAR Tools",
                        width: "28",
                        height: "28",
                        className: "text-jar-600"
                    })
                }), e.jsx("h1", {
                    className: "text-8xl md:text-9xl font-black text-gray-900 mb-8 tracking-tight",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: "JAR Tools"
                }), e.jsx("h2", {
                    className: "text-2xl md:text-4xl font-medium text-gray-600 mb-12 tracking-wide",
                    children: "JAR editor and viewer — right in your browser"
                }), e.jsxs("div", {
                    className: "flex gap-3 mb-4 justify-center",
                    children: [e.jsx("button", {
                        type: "button",
                        onClick: () => p("upload"),
                        className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow hover:shadow-md",
                        children: "Upload JAR File"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: () => p("demo"),
                        className: "px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg border border-gray-300 transition-colors shadow hover:shadow-md",
                        "aria-label": "Watch a 20 second demo",
                        children: "Watch Demo"
                    })]
                }), e.jsx("div", {
                    className: "text-center mb-8",
                    children: e.jsx(J, {
                        to: "/all-tools",
                        className: "text-sm font-medium text-gray-600 hover:text-gray-900 underline decoration-dotted",
                        "aria-label": "View all our Java tools",
                        children: "see all jar tools"
                    })
                })]
            })
        }), e.jsxs("main", {
            className: "container mx-auto px-4 pb-16",
            children: [e.jsx("div", {
                className: "max-w-5xl mx-auto",
                children: e.jsxs("div", {
                    id: "upload",
                    className: "p-6 scroll-mt-20",
                    children: [e.jsxs("div", {
                        className: "text-center mb-6",
                        children: [e.jsx("h3", {
                            className: "text-2xl font-extrabold text-gray-900 mb-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text transform hover:scale-105 transition-transform",
                            children: "Upload a jar and start exploring now ↓"
                        }), e.jsx("div", {
                            className: "w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"
                        })]
                    }), e.jsx("div", {
                        className: "relative bg-white border-2 border-blue-300 rounded-lg p-6 shadow-2xl shadow-blue-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/80 hover:border-blue-400 mb-6",
                        children: e.jsx(pt, {
                            onJarSelected: d,
                            showSamples: !0
                        })
                    }), e.jsx("div", {
                        className: "mb-8",
                        children: e.jsx(ce, {
                            adSlot: "1234567890",
                            adFormat: "auto",
                            campaign: n,
                            context: {
                                viewer: "main-page",
                                filePath: "",
                                fileType: "",
                                jarName: "",
                                jarInstanceId: ""
                            },
                            variant: "small",
                            isMinecraftMod: null,
                            isMainPageAd: !0,
                            className: ""
                        })
                    }), e.jsxs("section", {
                        id: "demo",
                        className: "mb-8 scroll-mt-20",
                        children: [e.jsx("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-6 text-center",
                            children: "Demo"
                        }), e.jsx("div", {
                            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                            children: e.jsx(es, {
                                poster: "/images/decompile-class-file.png",
                                mp4Src: "/video/decompile.mp4",
                                className: "w-full",
                                caption: "Autoplay is muted. Video loads on demand to save bandwidth."
                            })
                        })]
                    }), e.jsx(ts, {}), e.jsx("div", {
                        id: "powerful-features",
                        className: "mb-8 scroll-mt-20",
                        children: e.jsx(Xt, {})
                    })]
                })
            }), e.jsxs("div", {
                className: "max-w-3xl mx-auto mt-16 space-y-16",
                children: [e.jsxs("div", {
                    children: [e.jsx("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-6 text-center",
                        children: "Why Use Our Online Jar Editor?"
                    }), e.jsx("div", {
                        className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                        children: e.jsxs("ul", {
                            className: "list-disc pl-6 space-y-3 text-gray-600",
                            children: [e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Simplified JAR File Handling"
                                }), ": Easily upload and manage .jar files with our intuitive drag-and-drop interface. We validate files to ensure you're ready to perform a jar file edit quickly with our jar editor."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Intuitive Archive Navigation"
                                }), ": Seamlessly browse complex Java Archive structures. Our customizable view makes it simple to navigate and manage the contents of your JAR files."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Direct In-Browser Editing"
                                }), ": Edit JAR file contents directly with our jar viewer online and editor. Modify text-based files, save changes in memory, and revert if needed – no external tools required to edit jar files."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Clear Visual Feedback"
                                }), ": Keep track of your modifications effortlessly. Files you edit are clearly marked, giving you a constant overview of changes made to the JAR archive."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Zero Installation Needed"
                                }), ": Start your jar file edit immediately. Our jar file editor works entirely online, offering a modern interface without downloads or setup."]
                            })]
                        })
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-6 text-center",
                        children: "How to Manually Edit a JAR File"
                    }), e.jsxs("div", {
                        className: "text-sm text-gray-500 max-w-2xl text-left bg-gray-50 p-4 rounded-md border border-gray-200 mx-auto",
                        children: [e.jsx("p", {
                            className: "font-medium text-gray-700 mb-2",
                            children: "The traditional command-line process requires multiple technical steps:"
                        }), e.jsxs("ol", {
                            className: "list-decimal list-outside pl-8 space-y-2",
                            children: [e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Prerequisites:"
                                }), " Java Development Kit (JDK) installed and terminal/command prompt access."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Rename file extension"
                                }), " from .jar to .zip (JAR files use ZIP format internally):", e.jsx("br", {}), e.jsx("code", {
                                    children: "mv myapp.jar myapp.zip"
                                }), " (Unix/Mac) or ", e.jsx("code", {
                                    children: "ren myapp.jar myapp.zip"
                                }), " (Windows)"]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Extract contents"
                                }), " to a temporary directory:", e.jsx("br", {}), e.jsx("code", {
                                    children: "unzip myapp.zip -d temp_dir"
                                }), e.jsx("br", {}), "Alternative using JDK tools (no renaming needed): ", e.jsx("code", {
                                    children: "jar xf myapp.jar"
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Locate and modify files"
                                }), ":", e.jsx("br", {}), e.jsx("code", {
                                    children: "cd temp_dir"
                                }), e.jsx("br", {}), "Edit configuration or text files with any text editor", e.jsx("br", {}), "For .java files, edit and recompile using: ", e.jsx("code", {
                                    children: "javac path/to/YourFile.java"
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Re-package contents"
                                }), " into a new JAR:", e.jsx("br", {}), e.jsx("code", {
                                    children: "jar cf ../myapp-modified.jar ."
                                }), " (creates new JAR with all contents)", e.jsx("br", {}), "Or using zip: ", e.jsx("code", {
                                    children: "zip -r ../myapp-modified.zip ."
                                }), e.jsx("br", {}), e.jsx("strong", {
                                    children: "Note:"
                                }), " Include all files including META-INF directory with manifest"]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Rename back to .jar"
                                }), " if you used zip:", e.jsx("br", {}), e.jsx("code", {
                                    children: "mv ../myapp-modified.zip ../myapp-modified.jar"
                                })]
                            })]
                        }), e.jsx("p", {
                            className: "mt-4 text-gray-600",
                            children: "This complex process requires command-line expertise, careful handling of directories, and proper Java tooling. Our jar editor online eliminates these steps entirely—simply upload, edit, and download your modified JAR file in one seamless process."
                        })]
                    })]
                }), e.jsxs("div", {
                    id: "extract-jar-files",
                    children: [e.jsx("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-6 text-center",
                        children: "How to Extract Files from a JAR"
                    }), e.jsxs("div", {
                        className: "text-sm text-gray-500 max-w-2xl text-left bg-gray-50 p-4 rounded-md border border-gray-200 mx-auto",
                        children: [e.jsx("p", {
                            className: "font-medium text-gray-700 mb-2",
                            children: "Extract individual files or entire directories with these simple steps:"
                        }), e.jsxs("ol", {
                            className: "list-decimal list-outside pl-8 space-y-2",
                            children: [e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Upload your JAR file"
                                }), " using the drag-and-drop interface or file selector."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Navigate the file tree"
                                }), " to find the file or folder you want to extract."]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "For individual files:"
                                }), e.jsxs("ul", {
                                    className: "list-disc pl-6 mt-1 space-y-1",
                                    children: [e.jsx("li", {
                                        children: "Select the file in the tree view"
                                    }), e.jsx("li", {
                                        children: "Click the download icon in the file viewer header"
                                    }), e.jsx("li", {
                                        children: "The file will be downloaded to your computer with its original name"
                                    })]
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "For multiple files or directories:"
                                }), e.jsxs("ul", {
                                    className: "list-disc pl-6 mt-1 space-y-1",
                                    children: [e.jsx("li", {
                                        children: "Navigate to each file and download them individually"
                                    }), e.jsx("li", {
                                        children: "For entire folders, you can select and download each file in the folder"
                                    })]
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Security notice:"
                                }), " All files are processed directly in your browser with our secure download system that includes safety disclaimers for executable content."]
                            })]
                        }), e.jsx("p", {
                            className: "mt-4 text-gray-600",
                            children: "With our JAR Editor, there's no need for command-line tools or complex extraction utilities. You can quickly access and save individual files from your JAR archives with just a few clicks."
                        })]
                    })]
                }), e.jsxs("div", {
                    id: "file-type-icons",
                    children: [e.jsx("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-6 text-center",
                        children: "File Type Icons: Visual File Management"
                    }), e.jsxs("div", {
                        className: "text-sm text-gray-500 max-w-2xl text-left bg-gray-50 p-4 rounded-md border border-gray-200 mx-auto",
                        children: [e.jsx("p", {
                            className: "font-medium text-gray-700 mb-2",
                            children: "Our intuitive visual file system helps you quickly identify file types:"
                        }), e.jsxs("ul", {
                            className: "list-disc list-outside pl-8 space-y-2",
                            children: [e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Color-coded icons"
                                }), " immediately distinguish between:", e.jsxs("ul", {
                                    className: "list-disc pl-6 mt-1 space-y-1",
                                    children: [e.jsxs("li", {
                                        children: [e.jsx("span", {
                                            className: "text-blue-500 font-medium",
                                            children: "Blue icons"
                                        }), " indicate editable text files that you can modify directly"]
                                    }), e.jsxs("li", {
                                        children: [e.jsx("span", {
                                            className: "text-gray-500 font-medium",
                                            children: "Gray icons"
                                        }), " indicate non-editable files like binaries or compiled classes"]
                                    }), e.jsxs("li", {
                                        children: [e.jsx("span", {
                                            className: "text-jar-500 font-medium",
                                            children: "Folder icons"
                                        }), " clearly mark directories for easier navigation"]
                                    })]
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Consistent visual language"
                                }), " throughout the application to help you focus on editable content"]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "Modified file indicators"
                                }), " show which files have been changed from their original state"]
                            }), e.jsxs("li", {
                                children: [e.jsx("strong", {
                                    children: "No guesswork needed"
                                }), " - the color system immediately shows what you can edit"]
                            })]
                        }), e.jsx("p", {
                            className: "mt-4 text-gray-600",
                            children: "This visual system eliminates confusion when working with complex JAR archives containing hundreds of files, allowing you to immediately identify which files you can modify and which require specialized tools."
                        })]
                    })]
                })]
            }), e.jsx("section", {
                id: "pricing",
                className: "py-16 bg-gradient-to-br from-gray-50 to-gray-100 mt-16 rounded-2xl",
                children: e.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [e.jsxs("div", {
                        className: "max-w-4xl mx-auto text-center mb-12",
                        children: [e.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                            children: "Choose Your JAR Tools Experience"
                        }), e.jsx("p", {
                            className: "text-lg text-gray-600 mb-8",
                            children: "Get started for free or unlock advanced features with JAR Tools Pro"
                        })]
                    }), e.jsxs("div", {
                        className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-8",
                        children: [e.jsxs("div", {
                            className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative",
                            children: [e.jsxs("div", {
                                className: "text-center mb-6",
                                children: [e.jsx("h3", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "Free"
                                }), e.jsx("div", {
                                    className: "text-4xl font-bold text-gray-900",
                                    children: "$0"
                                }), e.jsx("p", {
                                    className: "text-gray-500 mt-2",
                                    children: "Perfect for getting started"
                                })]
                            }), e.jsxs("ul", {
                                className: "space-y-4 mb-8",
                                children: [e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "1 JAR upload per day"
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "View & browse JAR files"
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "Basic text file editing"
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "3 Java decompilations/day"
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "Download modified files"
                                    })]
                                })]
                            }), e.jsx("button", {
                                className: "w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors",
                                onClick: () => p("upload"),
                                children: "Get Started Free"
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl border-2 border-yellow-200 p-8 relative",
                            children: [e.jsx("div", {
                                className: "absolute -top-5 left-1/2 transform -translate-x-1/2",
                                children: e.jsxs("div", {
                                    className: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-2",
                                    children: [e.jsx("span", {
                                        className: "tracking-wide",
                                        children: "MOST POPULAR"
                                    }), e.jsx("span", {
                                        className: "ml-1 bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full",
                                        children: "20% OFF"
                                    })]
                                })
                            }), e.jsxs("div", {
                                className: "text-center mb-6 pt-4",
                                children: [e.jsx("h3", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "Pro"
                                }), e.jsxs("div", {
                                    className: "inline-flex items-center justify-center gap-1 bg-white/70 rounded-full p-1 border border-yellow-200 mb-3 shadow-sm",
                                    children: [e.jsx("button", {
                                        onClick: () => l(!1),
                                        className: `${t ? "text-orange-700/80" : "bg-white text-orange-700 shadow"} px-3 py-1.5 text-xs rounded-full transition-colors`,
                                        "aria-pressed": !t,
                                        children: "Monthly"
                                    }), e.jsx("button", {
                                        onClick: () => l(!0),
                                        className: `${t ? "bg-white text-orange-700 shadow" : "text-orange-700/80"} px-3 py-1.5 text-xs rounded-full transition-colors`,
                                        "aria-pressed": t,
                                        children: "Yearly"
                                    })]
                                }), t ? e.jsxs("div", {
                                    children: [e.jsxs("div", {
                                        className: "flex items-baseline justify-center",
                                        children: [e.jsx("span", {
                                            className: "text-4xl font-bold text-gray-900",
                                            children: "$10"
                                        }), e.jsx("span", {
                                            className: "text-gray-600 ml-2",
                                            children: "/year"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [e.jsx("span", {
                                            className: "line-through text-gray-400",
                                            children: "$12/year"
                                        }), e.jsx("span", {
                                            className: "text-green-600 font-semibold ml-2",
                                            children: "Save 20%"
                                        })]
                                    })]
                                }) : e.jsxs("div", {
                                    children: [e.jsxs("div", {
                                        className: "flex items-baseline justify-center",
                                        children: [e.jsx("span", {
                                            className: "text-4xl font-bold text-gray-900",
                                            children: "$0.99"
                                        }), e.jsx("span", {
                                            className: "text-gray-600 ml-2",
                                            children: "/month"
                                        })]
                                    }), e.jsx("div", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Special launch offer - normally $11.99/month"
                                    })]
                                }), e.jsx("p", {
                                    className: "text-gray-600 mt-2",
                                    children: "Everything you need for serious development"
                                })]
                            }), e.jsxs("ul", {
                                className: "space-y-4 mb-8",
                                children: [e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsxs("span", {
                                        className: "text-gray-700",
                                        children: [e.jsx("strong", {
                                            children: "Unlimited"
                                        }), " JAR uploads"]
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsxs("span", {
                                        className: "text-gray-700",
                                        children: [e.jsx("strong", {
                                            children: "Unlimited"
                                        }), " Java decompilation"]
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsxs("span", {
                                        className: "text-gray-700",
                                        children: ["Advanced ", e.jsx("strong", {
                                            children: "JSON editor"
                                        }), " with formatting"]
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsxs("span", {
                                        className: "text-gray-700",
                                        children: [e.jsx("strong", {
                                            children: "Properties editor"
                                        }), " with validation"]
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsxs("span", {
                                        className: "text-gray-700",
                                        children: [e.jsx("strong", {
                                            children: "Ad-free"
                                        }), " JAR editing experience"]
                                    })]
                                }), e.jsxs("li", {
                                    className: "flex items-start",
                                    children: [e.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0",
                                        children: e.jsx("svg", {
                                            className: "w-3 h-3 text-yellow-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: e.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), e.jsx("span", {
                                        className: "text-gray-700",
                                        children: "Priority support"
                                    })]
                                })]
                            }), e.jsx("div", {
                                className: "mb-4",
                                children: e.jsx(J, {
                                    to: "/pro",
                                    className: "text-sm text-gray-600 hover:text-gray-800 underline flex items-center justify-center",
                                    children: "Learn more about Pro features →"
                                })
                            }), e.jsx("button", {
                                onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                                className: "w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg",
                                children: e.jsxs("span", {
                                    className: "flex items-center justify-center",
                                    children: [e.jsx(It, {
                                        size: 20,
                                        className: "mr-2"
                                    }), t ? "Get Pro Yearly" : "Get Pro Monthly"]
                                })
                            })]
                        })]
                    })]
                })
            }), e.jsx(ss, {
                faqItems: ns
            })]
        }), e.jsx(ee, {})]
    })
}
  , as = () => {
    const s = re();
    return i.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", s.pathname)
    }
    , [s.pathname]),
    e.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: e.jsxs("div", {
            className: "text-center",
            children: [e.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                style: {
                    fontFamily: "Space Grotesk, sans-serif"
                },
                children: "404"
            }), e.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), e.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , De = `---
title: About the JD-GUI Java Decompiler
description: An overview of the popular open-source JD-GUI Java decompiler tool, its features, and how Jar Editor Online provides a convenient alternative.
publishedDate: 2024-08-01 # Placeholder date - adjust as needed
---

# About the JD-GUI Java Decompiler

*Last Updated: 2025-05-01*
---

## Introduction

The "Java Decompiler project" develops open-source tools for decompiling and analyzing Java bytecode, primarily for Java 5 and later versions. The most well-known tool from this project is **JD-GUI**, a graphical desktop application. These tools rely on the **JD-Core** library, which performs the actual reconstruction of Java source code from \`.class\` files.

## What is JD-GUI?

JD-GUI is a free, standalone graphical utility designed to display the Java source code of \`.class\` files. It allows developers to browse the reconstructed source code, providing quick access to methods, fields, and the overall structure of the compiled code. This is particularly useful for understanding the contents of compiled libraries, recovering lost source code, or debugging.

## Key Features of JD-GUI

Based on the project website, JD-GUI offers several helpful features:

*   **Source Code Display:** Reconstructs and displays Java source from \`.class\` files.
*   **Code Navigation:** Allows browsing the code structure with easy access to methods and fields.
*   **Wide Format Support:** Handles \`.class\`, \`.jar\`, \`.zip\`, \`.war\`, \`.ear\`, \`.aar\`, \`.kar\`, and \`.jmod\` files.
*   **Drag and Drop:** Supports drag-and-drop for opening files and even \`.log\` files (to jump to code lines from stack traces).
*   **Syntax Highlighting:** Displays the decompiled Java code with color coding for better readability.
*   **Hierarchy Browsing:** Shows the hierarchy of classes and Java modules.

## Compatibility

The underlying JD-Core library aims for broad compatibility, supporting bytecode generated by compilers from JDK 1.1.8 through JDK 10.0.2, as well as other compilers like Jikes and Eclipse JDT [[Source](https://java-decompiler.github.io)]. It handles Java 5 features like annotations, generics, and enums.

## Availability

JD-GUI is an open-source project released under the GPLv3 license. It is written in Java and downloadable installers or archives are available for Windows, macOS, and Linux (RPM/DEB/JAR).

+You can find the latest releases directly on the project's GitHub page: [JD-GUI Releases](https://github.com/java-decompiler/jd-gui/releases) [[Source](https://java-decompiler.github.io)].

The project also offers **JD-Eclipse**, a plugin for the Eclipse IDE, which integrates decompilation directly into the debugging workflow.

## How to Use JD-GUI (Standalone Application)

Once you have downloaded and launched the JD-GUI application (typically by double-clicking the \`.jar\` or executable file for your OS, or running \`java -jar jd-gui-x.y.z.jar\` from the command line), you can open files containing \`.class\` data in a few ways:

*   **File Menu:** Use the menu option *File > Open File...* to browse and select a \`.class\`, \`.jar\`, \`.zip\`, \`.war\`, etc.
*   **Recent Files:** Use *File > Recent Files* to quickly reopen previously viewed files.
*   **Drag and Drop:** Simply drag and drop compatible files directly onto the JD-GUI window from your operating system's file explorer.

JD-GUI will then display the decompiled Java source code, allowing you to navigate the code structure.

## The JAR Tools Advantage: A Modern Approach

While JD-GUI has been a valuable tool for many developers, it requires downloading, installing, and running a separate desktop application. This can be inconvenient, especially when you need a quick look or are working on multiple machines.

**JAR Tools offers a more streamlined, integrated, and modern solution directly in your web browser:**

*   **All-in-One Platform:** Unlike JD-GUI, which primarily focuses on decompilation, JAR Tools provides a comprehensive suite for JAR file management. You can **view, edit, and decompile** \`.class\` files all within the same intuitive interface. No need to switch between different applications.
*   **Zero Installation, Full Accessibility:** JAR Tools works entirely in your browser. There's nothing to download or install, and it's accessible from any operating system (Windows, macOS, Linux) with a modern web browser. Start working on your JAR files instantly, anywhere.
*   **Integrated Workflow:** Decompile files directly within the same environment you use to browse your JAR archive, edit text files, or manage other resources. This seamless integration speeds up your workflow significantly.
*   **Always Up-to-Date:** As a web-based tool, JAR Tools is continuously updated with the latest features and decompiler improvements without requiring any manual updates on your end.

With JAR Tools, simply upload your JAR, navigate to a \`.class\` file, and click the **"Decompile"** button to view the reconstructed Java source code. It's that simple.

![Decompiled Java Class File in JAR Tools](/images/decompiled-class-file.png "Decompiled Java Class File in JAR Tools")

## Ready to Experience a Better Way to Decompile?

Stop juggling separate tools and embrace the convenience of an all-in-one online solution. JAR Tools makes viewing, editing, and decompiling Java archives easier and more efficient than ever before. Say goodbye to installations and hello to instant, browser-based JAR management!

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';" 
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Start using JAR Tools now for free!">
    Experience JAR Tools Now - It's Free!
  </a>
</div>

> Explore the [JAR Tools Knowledge Base](/kb) for more guides and tips. `
  , Ee = `---
title: "Deep Security Scanning for JAR Files: Why It Matters"
description: "Comprehensive security scanning combines Software Composition Analysis (SCA) with advanced YARA-based malware detection to protect your Java applications from vulnerabilities and threats."
publishedDate: "2025-07-03"
featured: true
---

# Deep Security Scanning for JAR Files: Why It Matters

*Last Updated: 2025-07-03*
---

## Coming Soon to JAR Tools

We're excited to announce that comprehensive security scanning will be available soon on JAR Tools! This powerful feature will combine Software Composition Analysis (SCA) with advanced YARA-based malware detection to protect your Java applications.

**🔒 Want to be first in line?** Drop your email and we'll notify you the moment it launches - we'll unpack your JAR, check every dependency for CVEs, and run 25,000+ YARA rules against hidden malware.

## What is Deep Security Scanning?

Deep security scanning is a multi-layered approach that goes far beyond simple antivirus checking. It combines:

- **Software Composition Analysis (SCA)**: Identifying all components and dependencies within a JAR file
- **Vulnerability Database Matching**: Cross-referencing components against known CVE databases  
- **YARA Rule Engine**: Advanced pattern matching for malware, packed executables, and suspicious behaviors
- **Cloud Intelligence**: Multi-engine analysis for comprehensive threat detection

## Understanding the Security Scan Process

### 1. Unpack & SBOM Generation

**What happens**: The JAR file is extracted in a secure, isolated container environment. Tools like \`syft\` or \`cyclonedx-maven\` analyze the contents to build a complete Software Bill of Materials (SBOM).

**Technical implementation**:
\`\`\`bash
# Example SBOM generation
syft jar:your-application.jar -o json > sbom.json
cyclonedx-maven makeAggregateBom
\`\`\`

**Why it matters**: 
- Reveals ALL dependencies, including transitive ones you may not know about
- Creates an inventory of every library version in your JAR
- Enables precise vulnerability tracking and license compliance
- Often discovers "shadow dependencies" pulled in by frameworks

### 2. Dependency Vulnerability Matching

**What happens**: The SBOM is cross-referenced against multiple vulnerability databases including OSV (Open Source Vulnerabilities), GitHub Security Advisories, and the National Vulnerability Database (NVD).

**Database sources**:
- **OSV Database**: Real-time vulnerability data from Google
- **GitHub Advisories**: Community-maintained security alerts
- **NVD/CVE**: Official US government vulnerability database
- **Vendor-specific feeds**: Direct from Apache, Eclipse, Spring, etc.

**Example findings**:
\`\`\`json
{
  "vulnerability": "CVE-2023-42503",
  "library": "apache-commons-text",
  "version": "1.9",
  "severity": "CRITICAL",
  "description": "Apache Commons Text performs variable interpolation, allowing for arbitrary code execution"
}
\`\`\`

**Why it matters**:
- Identifies zero-day and recently disclosed vulnerabilities
- Provides CVSS severity scores for risk prioritization  
- Enables automated dependency update recommendations
- Prevents deployment of known vulnerable components

### 3. YARA-Based Malware Detection

**What happens**: The JAR contents are scanned using YARA (Yet Another Recursive Acronym), a powerful pattern-matching engine with 25,000+ curated rules.

**Rule sources include**:
- **Nextron VALHALLA**: Premium commercial ruleset for advanced persistent threats
- **Awesome YARA Community**: Open-source community-maintained rules
- **Custom Java-specific rules**: Patterns for JAR-based attacks

**Detection capabilities**:
- **Packed RATs**: Remote Access Trojans hidden in legitimate-looking JARs
- **Cryptocurrency miners**: Hidden mining code that consumes system resources
- **Steganography**: Data hidden within image or text files in the JAR
- **Code obfuscation**: Suspicious string encoding or reflection patterns
- **Backdoor patterns**: Known command-and-control communication signatures

**Example YARA rule structure**:
\`\`\`yara
rule Suspicious_Java_Reflection {
    meta:
        description = "Detects suspicious Java reflection patterns"
        author = "Security Team"
        
    strings:
        $reflect1 = "java.lang.reflect.Method"
        $reflect2 = "getDeclaredMethod"
        $invoke = "invoke"
        $runtime = "Runtime.getRuntime"
        
    condition:
        3 of them and filesize < 50MB
}
\`\`\`

**Why it matters**:
- Catches sophisticated malware that signature-based scanners miss
- Identifies supply chain attacks where legitimate libraries are compromised
- Detects novel attack patterns through heuristic analysis
- Provides protection against both automated and targeted attacks

### 4. Cloud Reputation Analysis (Optional)

**What happens**: File hashes are submitted to premium threat intelligence services like VirusTotal, which runs the samples through 70+ antivirus engines and behavioral analysis systems.

**Intelligence sources**:
- **Multi-AV verdict**: Results from Norton, McAfee, Bitdefender, etc.
- **Behavioral analysis**: Sandbox execution to observe runtime behavior
- **Community intelligence**: Crowdsourced threat data from security researchers
- **Vendor feeds**: Direct intelligence from security companies

**Privacy considerations**:
- Hashes only (not full files) for privacy-conscious organizations
- Optional service for businesses requiring maximum assurance
- Configurable retention and sharing policies

**Why it matters**:
- Provides "second opinion" validation from multiple security vendors
- Catches very recent threats not yet in public databases
- Offers behavioral analysis beyond static scanning
- Creates audit trail for compliance requirements

### 5. Comprehensive Reporting & Verification

**What happens**: All scan results are compiled into detailed reports with actionable recommendations and optional verification badges.

**Report formats**:
- **PDF Executive Summary**: High-level findings for management
- **HTML Technical Report**: Detailed findings with remediation steps
- **JSON/SARIF**: Machine-readable format for CI/CD integration
- **Security Badge**: Embeddable verification shield for repositories

**Example security badge**:
\`\`\`markdown
![Security Scan](https://jar.tools/badge/secure/your-jar-hash)
\`\`\`

**Report contents**:
- Vulnerability count by severity (Critical, High, Medium, Low)
- Detailed CVE descriptions with fix recommendations
- YARA rule matches with threat categorization
- SBOM with complete dependency tree
- Compliance status for standards like NIST, ISO 27001

## Why Deep Security Scanning is Critical

### Modern Threat Landscape

**Supply chain attacks are increasing**: High-profile incidents like SolarWinds and Log4Shell demonstrate how a single compromised dependency can affect thousands of applications.

**Dependency complexity**: Modern Java applications average 150+ transitive dependencies, making manual security review impossible.

**Sophisticated malware**: Traditional antivirus misses advanced threats using:
- Code obfuscation and packing
- Living-off-the-land techniques
- Fileless attacks using reflection
- Time-delayed activation

### Business Impact

**Financial costs**:
- Data breach average cost: $4.45 million (IBM Security Report 2023)
- Compliance violation fines: Up to 4% of annual revenue (GDPR)
- System downtime: $5,600 per minute for enterprise applications

**Operational impact**:
- Emergency patching disrupts development cycles
- Incident response diverts security team resources
- Customer trust damage from security incidents
- Legal liability for data protection failures

### Compliance Requirements

**Regulatory frameworks requiring security scanning**:
- **SOX (Sarbanes-Oxley)**: Financial reporting system security
- **HIPAA**: Healthcare data protection
- **PCI DSS**: Payment card industry security standards
- **GDPR**: EU data protection regulation
- **NIST Cybersecurity Framework**: US government standard

## Implementation Best Practices

### CI/CD Integration

\`\`\`yaml
# Example GitHub Actions workflow
name: Security Scan
on: [push, pull_request]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deep Security Scan
        run: |
          # Example security scanning integration
          # Replace with your preferred security scanning solution
          security-scanner analyze target/your-app.jar \\
            --output-format json \\
            --severity-threshold high
\`\`\`

### Continuous Monitoring

- **Daily scans**: Automated scanning of production JARs
- **New vulnerability alerts**: Notifications when new CVEs affect your dependencies
- **Baseline drift detection**: Alerts when JAR contents change unexpectedly
- **Policy enforcement**: Block deployments that fail security thresholds

### Risk Management

**Severity-based response**:
- **Critical**: Immediate patching required, deployment blocked
- **High**: Fix within 72 hours, escalate to security team
- **Medium**: Address in next sprint, add to security backlog
- **Low**: Review during regular maintenance cycles

## Cost-Benefit Analysis

### Traditional Approach Costs
- **Manual review**: Security engineer time ($150/hour × 8 hours = $1,200 per JAR)
- **Tool licensing**: Multiple security tools ($50,000+ annually)
- **Infrastructure**: Secure scanning environment setup and maintenance
- **Expertise**: Training team on security analysis techniques

### Deep Security Scan Value
- **Automated analysis**: Comprehensive scanning without manual effort
- **Expert-level detection**: Access to commercial-grade YARA rules
- **Immediate results**: Complete analysis in under 5 minutes
- **Compliance ready**: Reports meet audit requirements

**ROI calculation**: Preventing a single data breach justifies significant investment in security scanning infrastructure.

## Getting Started

### For Development Teams
1. **Start with high-risk JARs**: Production applications, external-facing services
2. **Integrate early**: Add scanning to CI/CD before deployment
3. **Set policies**: Define acceptable risk levels and response procedures
4. **Train developers**: Educate team on reading scan reports and remediation

### For Security Teams
1. **Establish baselines**: Scan all existing JAR files to understand current risk
2. **Create policies**: Define security thresholds and escalation procedures
3. **Monitor continuously**: Set up alerts for new vulnerabilities in deployed code
4. **Measure progress**: Track vulnerability reduction over time

### For Management
1. **Quantify risk**: Use scan results to calculate potential business impact
2. **Budget appropriately**: Factor security scanning into development costs
3. **Report compliance**: Use scan results for audit and regulatory reporting
4. **Support adoption**: Ensure teams have resources for remediation

## Future of Security Scanning

### Emerging Technologies
- **AI-powered threat detection**: Machine learning for zero-day identification
- **Behavioral analysis**: Runtime monitoring integrated with static scanning
- **Quantum-resistant cryptography**: Scanning for post-quantum security readiness
- **Container-aware scanning**: Deep inspection of containerized Java applications

### Industry Trends
- **Shift-left security**: Earlier integration in development lifecycle
- **DevSecOps adoption**: Security as code with automated enforcement
- **Supply chain transparency**: Software Bill of Materials becoming standard
- **Regulatory pressure**: Increasing requirements for security attestation

## Conclusion

Deep security scanning represents a fundamental shift from reactive to proactive security. By combining multiple detection techniques—SCA, YARA rules, and cloud intelligence—organizations can identify threats that traditional tools miss while maintaining the speed required for modern development.

Comprehensive security scanning provides enterprise-grade protection that scales with modern development practices. The alternative—discovering vulnerabilities in production—costs exponentially more in both financial terms and reputation damage.

As the threat landscape continues to evolve, deep security scanning will become as essential as unit testing in the software development lifecycle. Organizations that adopt these practices early will have a significant security advantage over those that wait for compliance requirements to force adoption.

---

## Get Notified When Secure-Scan Launches

This comprehensive security scanning feature is coming soon to JAR Tools! We'll unpack your JAR, check every dependency for CVEs, and run 25,000+ YARA rules against hidden malware.`
  , _e = `---
title: How to Convert JAR to ZIP
description: Learn how to easily convert your JAR files to ZIP format using Jar Editor Online.
---

# How to Convert JAR to ZIP Using Jar Editor Online

Jar Editor Online provides a straightforward way to extract your Java Archive (JAR) files into the standard ZIP format. This can be useful for various purposes, such as easily extracting all contents with standard ZIP tools or when a ZIP file is required instead of a JAR.

Our "Save As ZIP" feature allows you to download the currently loaded archive, including any in-memory modifications you've made, as a \`.zip\` file.

## Steps to extract JAR to ZIP:

1.  **Upload Your JAR File:**
    *   Navigate to the [Jar Editor Online home page](/).
    *   Use the drag-and-drop area or the file selector to upload the JAR file you wish to convert.

2.  **Wait for Processing:**
    *   The application will load and process your JAR file. You'll see the file tree and content viewer appear.

3.  **(Optional) Make Modifications:**
    *   If needed, you can browse the JAR contents, edit text files, or modify string constants. Any changes you make will be included in the final ZIP file.

4.  **Locate the "Save As ZIP" Button:**
    *   Once the JAR is loaded, look at the header section above the file tree and content viewer.
    *   You will find a button labeled "**Save As ZIP**" with an archive icon. This button is always available as long as a file is loaded.

    ![Save As ZIP Button Location](/images/save-as-zip.png)

5.  **Click "Save As ZIP":**
    *   Click the "Save As ZIP" button.

6.  **Confirm Download:**
    *   A disclaimer dialog will appear, especially if the archive contains executable content. This is a standard security measure.
    *   Review the information, confirm it and download the zip file.

7.  **Save Your ZIP File:**
    *   Your browser will begin downloading the file.
    *   The downloaded file will have the same name as your original JAR file but with a \`.zip\` extension (e.g., if you uploaded \`my-archive.jar\`, it will be downloaded as \`my-archive.zip\`).

That's it! You have successfully converted your JAR file to a ZIP archive using Jar Editor Online. You can now use any standard ZIP utility to open and extract its contents.

## Why Convert JAR to ZIP?

*   **Universal Accessibility:** ZIP is a universally recognized archive format, easily handled by all major operating systems without needing Java-specific tools.
*   **Simplified Extraction:** Extracting all contents is often simpler with standard ZIP tools.
*   **Meeting Specific Requirements:** Some platforms or processes might specifically require a \`.zip\` file instead of a \`.jar\`.
*   **Including Modifications:** Our tool ensures that any edits you've made within the editor (like changes to text files or string constants) are preserved in the downloaded ZIP file.

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';" 
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Try Jar Editor Online Now - It's Free!">
    Try Now For Free!
  </a>
</div>

If you have any questions or encounter issues, please refer to our [main Knowledge Base page](/kb) or contact support. 

`
  , Pe = `---
title: How to Decompile Java Class Files
description: Learn how to use Jar Editor Online to decompile .class files into readable Java source code.
---

# How to Decompile Java Class Files with Jar Editor Online

Jar Editor Online includes a powerful feature that allows you to decompile Java \`.class\` files back into human-readable Java source code. This is incredibly useful for understanding the inner workings of a library, recovering lost source code, or learning from existing compiled Java applications.

## Steps to Decompile a .class File:

1.  **Upload Your JAR File:**
    *   Go to the [Jar Editor Online home page](/).
    *   Upload the JAR file containing the \`.class\` file(s) you wish to decompile using the uploader.

2.  **Navigate to the .class File:**
    *   Once the JAR is loaded, the file tree will be displayed on the left panel.
    *   Browse through the directories to locate the specific \`.class\` file you are interested in.
    *   Click on the \`.class\` file. Its raw content (mostly binary, with some readable strings) will be displayed in the main viewer panel.

3.  **Locate and Click the "Decompile" Button:**
    *   When a \`.class\` file is selected, a set of action buttons will appear in the header of the content viewer panel (above the displayed content).
    *   Look for the button labeled "**Decompile**" (it usually has a binary/code icon).

    ![Decompile Button Location](/images/decompile-class-file.png)

4.  **Decompilation Process:**
    *   Upon clicking "Decompile", the application will send the class file to our backend server for processing.
    *   You'll see a loading indicator (e.g., "Decompiling...").
    *   **Free Tier Users:** You have a limit of 3 decompilations per day. 
        *   If you have remaining decompilations, the process will continue.
        *   If you've reached your limit, a modal will appear informing you and suggesting an upgrade to Pro.
    *   **Pro Users:** You have unlimited decompilations.

5.  **View Decompiled Java Source Code:**
    *   Once the decompilation is complete, the content viewer will update to display the Java source code.
    *   The code will be syntax-highlighted for readability.
    *   If the decompilation fails (e.g., due to a heavily obfuscated class file or an error), an appropriate message will be shown.

    ![Decompiled Java Source View](/images/decompiled-class-file.png)

## Understanding Decompilation Results:

*   **Accuracy:** Decompilers aim to reconstruct the original source code, but the result might not be perfectly identical, especially if the code was obfuscated or compiled with certain optimizations.
*   **Readability:** The decompiled code provides valuable insight into the logic and structure of the class file.
*   **Not for Recompilation:** While you can view and understand the code, directly recompiling decompiled output may not always work without modifications.

## Why Decompile Class Files?

*   **Understanding Third-Party Libraries:** See how external libraries are implemented.
*   **Legacy Code Analysis:** Analyze old Java applications where the original source code might be lost.
*   **Learning & Education:** Study real-world Java code examples.
*   **Debugging:** Gain insights when debugging issues involving compiled code for which you don't have the source.

<div style="margin-top: 1.5rem; margin-bottom: 1.5rem; padding: 1rem; border-left: 4px solid #FACC15; background-color: #FEFCE8; color: #713F12; font-style: italic;">
  For more details on our Pro features, including unlimited decompilations, please visit our <strong style="color: #422006;"><a href="/pro" style="text-decoration: underline; color: inherit;">Jar Editor Online Pro</a></strong> version page.
</div>

If you have any questions, check out our [main Knowledge Base page](/kb). `
  , Me = `---
title: How to Decompile Java Class Files on Linux
description: A guide for Linux users on decompiling Java .class files using popular tools like JD-GUI, CFR, and Procyon.
publishedDate: 2024-07-29
---

# How to Decompile Java Class Files on Linux

*Last Updated: 2024-07-29*

---

## Introduction

Java code is typically compiled into bytecode stored in \`.class\` files. While this bytecode is executed by the Java Virtual Machine (JVM), it's not directly human-readable source code. Decompilation is the process of converting this compiled bytecode back into Java source code (\`.java\` file) as output. The quality of the decompiled code can vary depending on the complexity of the original code, the compiler used, and the sophistication of the decompiler.

This guide focuses on how Linux users can decompile \`.class\` files using various popular tools.

## What is Decompiling?

Decompiling reverses the compilation process. A Java decompiler takes a \`.class\` file containing bytecode as input and attempts to produce equivalent Java source code (\`.java\` file) as output. The quality of the decompiled code can vary depending on the complexity of the original code, the compiler used, and the sophistication of the decompiler.

## Why Decompile?

Developers might decompile Java code for several reasons:

*   **Learning:** Understanding how libraries or frameworks work internally when source code is unavailable.
*   **Debugging:** Diagnosing issues in third-party libraries or legacy systems where source is lost.
*   **Interoperability:** Figuring out how to interact with a closed-source component.
*   **Security Analysis:** Inspecting code for potential vulnerabilities (with appropriate permissions).

## The Easy Way: Using an Online Java Decompiler

Before diving into command-line tools that require installation and configuration on Linux, consider using an online decompiler. Our **JAR Tools** provides a seamless experience to decompile \`.class\` files and entire \`.jar\` archives directly in your browser.

**Why use JAR Tools?**

*   **No Installation Needed:** Forget \`apt\`, \`dpkg\`, or managing \`.jar\` executables. Just upload and decompile.
*   **User-Friendly Interface:** A clean, graphical interface that's much simpler than command-line options.
*   **All-in-One Tool:** View, edit, and decompile JAR files in one place without switching applications.

For a quick and hassle-free decompilation, JAR Tools is the ideal solution.

<div style="text-align: center; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 12px 28px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049';" 
     onmouseout="this.style.backgroundColor='#4CAF50';"
     title="Decompile JAR or Class Files Online">
    Decompile Class Files Online Now
  </a>
</div>

---

## Important Considerations

Before decompiling code you didn't write, be aware of:

*   **Legality and Licensing:** Decompiling might violate the terms of service or license agreements of the software. Always respect copyright laws and software licenses.
*   **Ethics:** Decompiling proprietary code without permission is unethical.
*   **Code Quality:** Decompiled code might not be identical to the original source. It can contain artifacts, missing comments, or slightly different structures.

## Popular Decompilers for Linux

Several excellent Java decompilers work well on Linux systems.

### 1. JD-GUI (Java Decompiler GUI)

JD-GUI is a popular standalone graphical utility that displays Java source codes of \`.class\` files.

**Installation:**

*   **Download:** Visit the [official JD-GUI GitHub releases page](https://github.com/java-decompiler/jd-gui/releases) and download the latest release suitable for Linux (often a \`.jar\` file or sometimes a \`.deb\` package).
*   **Using \`.deb\` (if available):** If a \`.deb\` file is provided (e.g., for Debian/Ubuntu based distros):
    \`\`\`bash
    sudo apt update
    sudo dpkg -i jd-gui-*.deb
    # Fix dependencies if needed
    sudo apt --fix-broken install 
    \`\`\`
*   **Using \`.jar\`:** If you downloaded the \`.jar\` file, you usually need Java installed:
    \`\`\`bash
    # Ensure you have a Java Runtime Environment (JRE) installed
    sudo apt update
    sudo apt install default-jre # Example for Debian/Ubuntu
    
    # Run JD-GUI (make the jar executable first if needed)
    chmod +x jd-gui-*.jar 
    ./jd-gui-*.jar
    # Or if it's not directly executable:
    java -jar jd-gui-*.jar
    \`\`\`

**Usage:**

Launch JD-GUI. Use the \`File > Open File...\` menu to select a \`.class\` file or a \`.jar\` file. The decompiled code will be displayed in the GUI.

### 2. CFR (Command-line Decompiler)

CFR is a modern and actively maintained command-line Java decompiler.

**Installation:**

1.  Ensure you have a Java Runtime Environment (JRE) installed.
2.  Download the latest CFR \`.jar\` file from the [official CFR website](https://www.benf.org/other/cfr/).

**Usage:**

Open your terminal and run CFR using the \`java -jar\` command:

\`\`\`bash
# Decompile a single class file and print to console
java -jar cfr-*.jar YourClass.class

# Decompile a single class file and save to YourClass.java
java -jar cfr-*.jar YourClass.class --outputdir ./

# Decompile an entire JAR file
java -jar cfr-*.jar application.jar --outputdir decompiled_src
\`\`\`

CFR has many command-line options for finer control. Run \`java -jar cfr-*.jar --help\` for details.

### 3. Procyon (Command-line Decompiler)

Procyon is another powerful open-source decompiler, known for its accuracy, especially with modern Java features. It's used by some IDEs internally.

**Installation:**

1.  Ensure you have a Java Runtime Environment (JRE) installed.
2.  Download the \`procyon-decompiler-*.jar\` file. Finding official releases can sometimes be tricky; searching Maven repositories or the [Bitbucket project (might be less active)](https://bitbucket.org/mstrobel/procyon/src/master/) are options.

**Usage:**

Similar to CFR, use Procyon from the command line:

\`\`\`bash
# Decompile a single class file and print to console
java -jar procyon-decompiler-*.jar YourClass.class

# Decompile a single class file and save to YourClass.java in the specified directory
java -jar procyon-decompiler-*.jar -o decompiled_src YourClass.class

# Decompile an entire JAR file
java -jar procyon-decompiler-*.jar -jar application.jar -o decompiled_src
\`\`\`

Check Procyon's documentation or help output for more options.

## Using Decompiled Code

Remember that decompiled code is primarily for analysis and understanding. It might not compile directly without modifications, and it lacks the original comments and variable names (unless debugging information was included during compilation).`
  , ze = `---
title: How to Download Your Modified JAR File
description: Learn how to edit files within your JAR and download the complete modified archive using Jar Editor Online.
publishedDate: 2023-10-27
---

# Downloading Your Modified JAR File

<div className="rounded-lg overflow-hidden shadow-md border border-gray-200 my-4">
  <video
    controls
    muted
    loop
    playsInline
    className="w-full h-auto"
  >
    <source src="/video/edit-text-files.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="p-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
    Demo: Editing text files and exporting the modified JAR archive.
  </div>
</div>

Jar Editor Online allows you to make changes to various files within your JAR archive, such as text files, configuration files (like \`MANIFEST.MF\`, JSON, XML), and even string constants in class files (Pro feature). Once you've made your modifications, you can easily download the entire updated JAR file.

This guide shows you how to save your changes and export the modified archive.

## Steps to Edit Files and Download the Modified JAR:

1.  **Upload Your JAR File:**
    *   Navigate to the [Jar Editor Online home page](/).
    *   Upload your JAR using the file selector or by dragging and dropping it onto the designated area.

2.  **Modify Files:**
    *   Once the JAR is loaded, navigate the file tree on the left to find the file you want to edit.
    *   Select the file. If it's a text-based file (e.g., \`.txt\`, \`.properties\`, \`.xml\`, \`MANIFEST.MF\`), its content will appear in the editor panel.
    *   Make your desired changes directly in the editor.
    *   Click the "Save Changes" button (or similar, typically located above the editor panel for the specific file) to save the modifications to that file in memory. The file will be marked as modified in the file tree.
    *   You can repeat this process for multiple files.

3.  **Locate the "Export Modified JAR" Button:**
    *   After making all your desired changes, look for the "**Export Modified JAR**" button. This button is usually located in the main header of the editor interface, visible when there are pending modifications to any file in the archive or string constants. It often has a download icon.

4.  **Click "Export Modified JAR":**
    *   Click this button to initiate the process of packaging your modified files into a new JAR.

5.  **Confirm Download (Disclaimer):**
    *   A disclaimer dialog will likely appear, especially if your JAR contains executable content. This is a standard security measure.
    *   Review the information and confirm that you wish to proceed with the download.

6.  **Save Your Modified JAR File:**
    *   Your browser will begin downloading the updated JAR file.
    *   The downloaded file will typically have \`-modified.jar\` appended to its original name (e.g., if you uploaded \`my-app.jar\`, it will be downloaded as \`my-app-modified.jar\`).




That's it! You've successfully edited files within your JAR and downloaded the updated archive. Always remember to test your modified JAR files thoroughly to ensure they work as expected.

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <a href="/"
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';"
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Try Jar Editor Online Now - It's Free!">
    Try Now For Free!
  </a>
</div>

> For more guides and tips, explore the [Jar Editor Online Knowledge Base](/kb). `
  , Oe = "---\ntitle: How to Edit JAR Files on Linux/macOS\ndescription: A guide to editing the contents of JAR files using standard command-line tools on Linux and macOS.\npublishedDate: 2024-07-29\n---\n\n# How to Edit JAR Files on Linux/macOS (Command Line)\n\n*Reading time: ~5 minutes • Last updated: July 2024*\n\n---\n\nWhile our [Online JAR Editor](/ \"Link to the main editor page\") provides a much simpler graphical interface, sometimes you might need or want to edit a JAR file manually using the command line on Linux or macOS. This guide outlines the traditional process.\n\n## Prerequisites\n\n*   **Java Development Kit (JDK):** Ensure you have a JDK installed. You can check with `java -version` and `javac -version`. The `jar` command is part of the JDK.\n*   **Terminal Access:** You'll need to use your terminal application (e.g., Terminal, iTerm2).\n\n## Steps\n\n1.  **Navigate to the Directory:**\n    Open your terminal and use the `cd` command to navigate to the directory containing your JAR file (`your-app.jar`).\n    ```bash\n    cd /path/to/your/jar/directory\n    ```\n\n2.  **Create a Temporary Directory:**\n    It's best practice to extract the JAR contents into a temporary directory to avoid cluttering the current folder.\n    ```bash\n    mkdir temp_jar_contents\n    cd temp_jar_contents\n    ```\n\n3.  **Extract the JAR Contents:**\n    Use the `jar` command to extract the archive into the current directory (`temp_jar_contents`). The `xf` flags stand for e**x**tract **f**ile.\n    ```bash\n    jar xf ../your-app.jar\n    ```\n    *Alternatively, since JAR files use the ZIP format, you could rename it to `.zip` and use `unzip`, but using the `jar` command is more direct.*\n\n4.  **Locate and Modify Files:**\n    Navigate through the extracted directories and files. Use standard Linux/macOS commands like `ls` to list files, `cd` to change directories, and a command-line text editor (like `nano`, `vim`, or `emacs`) or a graphical editor to modify the desired files (e.g., configuration files, text files).\n    ```bash\n    ls META-INF/\n    nano config/application.properties\n    # Make your edits and save the file\n    ```\n    *If you need to edit `.java` source files, you'll need to recompile them using `javac` after editing and ensure the resulting `.class` file is placed correctly within the directory structure, replacing the old one.*\n    ```bash\n    # Example if you edited src/com/example/MyClass.java\n    # (Adjust paths based on your project structure and classpath needs)\n    # javac -cp .:/path/to/libs src/com/example/MyClass.java \n    # mv src/com/example/MyClass.class com/example/MyClass.class \n    ```\n\n5.  **Re-package the JAR:**\n    After making your modifications, navigate back *out* of the `temp_jar_contents` directory. Then, use the `jar` command again to create a *new* JAR file from the contents of the temporary directory. The `cf` flags stand for **c**reate **f**ile. The `.` indicates that the contents should be taken from the current directory (`temp_jar_contents` relative to where you are running the command from).\n    ```bash\n    cd .. \n    jar cf your-app-modified.jar -C temp_jar_contents .\n    ```\n    *   `your-app-modified.jar`: The name for your new, modified JAR file.\n    *   `-C temp_jar_contents`: This crucial option tells the `jar` command to change *into* the `temp_jar_contents` directory *before* archiving its contents (`.`). This prevents the `temp_jar_contents` directory itself from being included at the root of the new JAR.\n    *   `.`: Represents all files and directories within `temp_jar_contents`.\n\n6.  **Clean Up (Optional):**\n    Once you've verified `your-app-modified.jar` works as expected, you can remove the temporary directory.\n    ```bash\n    rm -rf temp_jar_contents\n    ```\n\nThis manual process highlights the complexity involved compared to using a dedicated tool. Our online editor handles the extraction, editing interface, and repackaging seamlessly within your browser. "
  , Le = "---\ntitle: How to Edit JAR Files on Windows\ndescription: A guide to editing the contents of JAR files using common tools available on Windows, like 7-Zip and the command prompt.\npublishedDate: 2024-07-29\n---\n\n# How to Edit JAR Files on Windows\n\n*Reading time: ~5 minutes • Last updated: July 2024*\n\n---\n\nWhile our [Online JAR Editor](/ \"Link to the main editor page\") offers a convenient graphical way to edit JARs, you might occasionally need to perform edits manually using the Windows command line (Command Prompt or PowerShell). Here's how:\n\n## Prerequisites\n\n*   **Java Development Kit (JDK):** Ensure you have a JDK installed and its `bin` directory is added to your system's PATH environment variable. This allows you to run `jar`, `java`, and `javac` from any directory. You can verify by opening Command Prompt and typing `java -version`, `javac -version`, and `jar`.\n*   **Command Prompt or PowerShell:** You'll use one of these terminal interfaces.\n\n## Steps\n\n1.  **Navigate to the Directory:**\n    Open Command Prompt or PowerShell. Use the `cd` command to navigate to the folder containing your JAR file (`your-app.jar`).\n    ```cmd\n    cd C:\\path\\to\\your\\jar\\directory\n    ```\n\n2.  **Create a Temporary Directory:**\n    Create a temporary folder to extract the JAR contents into.\n    ```cmd\n    mkdir temp_jar_contents\n    cd temp_jar_contents\n    ```\n\n3.  **Extract the JAR Contents:**\n    Use the `jar` command with the `xf` flags (e**x**tract **f**ile) to extract the archive into the current directory (`temp_jar_contents`). You need to specify the path back to the original JAR.\n    ```cmd\n    jar xf ..\\your-app.jar\n    ```\n    *Alternatively, you could rename the `.jar` file to `.zip` and use Windows' built-in ZIP functionality or a tool like 7-Zip to extract the contents.*\n\n4.  **Locate and Modify Files:**\n    Use `dir` to list files and `cd` to navigate the extracted folders. You can edit text files using Notepad, Notepad++, VS Code, or any other text editor.\n    ```cmd\n    dir META-INF\n    notepad config\\application.properties\n    ```\n    Make your changes and save the file.\n\n    *If you need to edit `.java` source files, you must recompile them using `javac` after editing. Ensure the resulting `.class` file replaces the old one in the correct location within the `temp_jar_contents` structure. Compiling Java code often requires setting the classpath (`-cp`) correctly.*\n    ```cmd\n    REM Example if you edited src\\com\\example\\MyClass.java\n    REM (Adjust paths and classpath based on your project)\n    REM javac -cp .;<path_to_libs>\\* src\\com\\example\\MyClass.java\n    REM move src\\com\\example\\MyClass.class com\\example\\MyClass.class\n    ```\n\n5.  **Re-package the JAR:**\n    After making modifications, navigate back *out* of the `temp_jar_contents` directory. Use the `jar` command with `cf` (**c**reate **f**ile) to create a *new* JAR file from the temporary directory's contents. The `-C` option is crucial here.\n    ```cmd\n    cd ..\n    jar cf your-app-modified.jar -C temp_jar_contents .\n    ```\n    *   `your-app-modified.jar`: The name for your new JAR.\n    *   `-C temp_jar_contents`: This option tells `jar` to change *into* the `temp_jar_contents` directory before archiving.\n    *   `.`: Represents all contents of the directory specified by `-C`.\n\n6.  **Clean Up (Optional):**\n    After confirming the `your-app-modified.jar` works correctly, you can delete the temporary folder.\n    ```cmd\n    rmdir /s /q temp_jar_contents\n    ```\n\nEditing JAR files manually on the command line involves several steps and careful path management. Our online editor simplifies this entire workflow, providing a visual interface for browsing, editing, and saving JARs directly in your browser. "
  , Ue = "---\ntitle: Exploring Minecraft Mods with Jar Tools\ndescription: Learn how to use Jar Tools to view the contents of Minecraft mod (.jar) files, understand their structure, and explore their resources.\n---\n\n# Exploring Minecraft Mods with Jar Tools: A Beginner's Guide\n\nMinecraft mods transform your gaming experience by adding new creatures, blocks, dimensions, and game mechanics. But have you ever encountered a broken mod, wondered how your favorite feature works, or wanted to learn mod development? Understanding what's inside Minecraft mod files can unlock these mysteries and more.\n\n## Why Explore Minecraft Mods?\n\nBefore diving into the technical aspects, let's explore the compelling reasons why you might want to peek inside Minecraft mod `.jar` files:\n\n### **🔧 Troubleshooting Mod Issues**\nWhen mods crash, conflict with each other, or behave unexpectedly, examining their contents can reveal:\n- Configuration files that need adjustment\n- Missing dependencies or version mismatches\n- Resource conflicts between mods\n- Error logs or debugging information\n\n### **🎨 Customizing Your Experience**\nMany mods allow customization through:\n- **Texture modification**: Replace or edit textures to match your preferred art style\n- **Language files**: Translate mods to your language or fix typos\n- **Configuration tweaks**: Adjust gameplay balance, spawn rates, or recipe difficulty\n- **Sound replacement**: Swap audio files for a personalized experience\n\n### **📚 Learning Mod Development**\nAspiring mod developers can gain invaluable insights by studying existing mods:\n- **Code structure**: Learn how experienced developers organize their projects\n- **Best practices**: Discover efficient coding patterns and techniques\n- **Feature implementation**: Understand how complex features like new dimensions or entities are created\n- **Resource organization**: See how assets, data, and code work together\n\n### **🕵️ Security and Quality Assurance**\nBefore installing mods from unknown sources, you can:\n- Verify the mod contains what it claims to offer\n- Check for suspicious or malicious code patterns\n- Ensure the mod includes proper licensing and attribution\n- Confirm compatibility with your Minecraft version and mod loader\n\n### **🎯 Content Creation and Analysis**\nContent creators, server administrators, and mod pack developers often need to:\n- Document mod features for wikis or guides\n- Create compatibility patches between mods\n- Extract assets for promotional materials (respecting licenses)\n- Analyze mod performance and resource usage\n\n### **🔍 Satisfying Curiosity**\nSometimes you simply want to understand:\n- How that amazing feature actually works\n- What files make up your favorite mod\n- Why certain mods are larger or smaller than others\n- The difference between similar mods\n\n---\n\n**Ready to start exploring?** [Jar Tools](/) provides an easy, web-based way to upload and explore the contents of Minecraft mod `.jar` files right in your browser. This guide will walk you through the entire process, from uploading your first mod to understanding complex mod structures.\n\n**Important Disclaimer:** [Jar Tools](/) is a file viewer and decompiler designed for educational and troubleshooting purposes. While it can help you see what's inside a mod, it's not a dedicated security or malware scanning tool. Always download Minecraft mods from reputable and official sources like CurseForge, Modrinth, or directly from mod authors.\n\n## Prerequisites\n\n*   **A Minecraft Mod File:** This will be a file ending in `.jar`.\n*   **Web Browser:** Access to [Jar Tools](/).\n\n## Steps to View a Minecraft Mod with Jar Tools\n\nHere's how you can use [Jar Tools](/) to delve into a Minecraft mod:\n\n### 1. Obtain Your Mod File\n\nFirst, you'll need the mod file itself. You can download mods from well-known platforms like:\n\n*   [CurseForge](https://www.curseforge.com/minecraft/mc-mods)\n*   [Modrinth](https://modrinth.com/mods)\n\n**Important:**\n*   Always download mods from official sources or the mod author's direct links to minimize security risks.\n*   Ensure the mod version is compatible with your Minecraft version (and mod loader, e.g., Forge, Fabric, Quilt, NeoForge).\n\n### 2. Open Jar Tools\n\nNavigate to [Jar Tools](/) in your web browser.\n\n### 3. Upload the Mod `.jar` File\n\nOnce on the [Jar Tools](/) website, you'll see an option to upload your `.jar` file. You can usually:\n\n*   Drag and drop the mod's `.jar` file directly onto the designated area on the page.\n*   Click the upload area to open a file dialog and select the mod file from your computer.\n\n[Jar Tools](/) will then process the file and display its contents in a navigable tree structure.\n\n### 4. Navigating the Mod Structure\n\nAfter uploading, you'll see a file tree on the left side. Minecraft mods often have a common structure, though it can vary significantly based on the mod loader (Forge, Fabric, Quilt, NeoForge, etc.) and the mod's complexity. Here's a more detailed look at typical directories and files:\n\n*   **`assets/`**: This is a crucial directory, especially for client-side resources. It's typically structured as `assets/[modid]/`, where `[modid]` is the unique identifier for the mod.\n    *   **`textures/`**: Contains image files, almost exclusively `.png` format.\n        *   `blocks/`: Textures for new blocks.\n        *   `items/`: Textures for new items.\n        *   `entity/`: Textures for new creatures, monsters, or other entities.\n        *   `gui/`: Textures for graphical user interfaces (e.g., custom machine UIs, inventory screens).\n        *   `models/armor/`: Textures for armor pieces.\n        *   `effects/`: Textures for particles or special effects.\n    *   **`sounds/` or `soundevents/`**: Contains sound files, often in `.ogg` format. The structure might reflect categories like `mob/`, `block/`, `item/`. `soundevents.json` or similar files might define how these sounds are used in-game.\n    *   **`lang/`**: Language localization files.\n        *   `en_us.json`: (or other language codes like `de_de.json`, `zh_cn.json`) These JSON files map internal translation keys (e.g., `item.mymod.myitem.name`) to human-readable text displayed in the game. This is how mods support multiple languages.\n    *   **`models/`**: JSON files defining the 3D shapes and appearances of blocks and items.\n        *   `block/`: Models for blocks.\n        *   `item/`: Models for items. These often reference textures from the `textures/` directory.\n    *   **`blockstates/`**: JSON files that define the different visual states a block can have (e.g., a furnace being on or off, a crop at different growth stages) and link these states to specific models from the `models/block/` directory.\n    *   **`shaders/`**: Optional directory for mods that implement custom visual effects using GLSL shaders.\n    *   **`font/`**: For custom font files if the mod uses them.\n\n*   **`data/`**: This directory is used for data-driven configurations and game elements. Similar to `assets`, it's often structured as `data/[modid]/` or `data/[namespace]/`.\n    *   **`recipes/`**: JSON files defining crafting recipes, smelting recipes, and other custom recipes introduced by the mod.\n    *   **`loot_tables/`**: JSON files that determine what items drop from blocks when broken, or from entities when killed.\n    *   **`advancements/`**: JSON files for custom advancements (the pop-up achievements/progress system).\n    *   **`tags/`**: JSON files used to group items, blocks, fluids, or entity types into collections. Tags are heavily used in recipes, loot tables, and game logic (e.g., a \"forge:ores\" tag might include all ore blocks from various mods).\n        *   `blocks/`\n        *   `items/`\n        *   `fluids/`\n        *   `entity_types/`\n    *   **`worldgen/`**: For mods that add custom world generation features, this might contain configurations for biomes, configured features (like trees or ore veins), noise settings, etc.\n        *   `biome/`\n        *   `configured_feature/`\n        *   `placed_feature/`\n    *   **Dimension and Dimension Type files (JSON)**: If a mod adds custom dimensions.\n\n*   **`META-INF/`**: A standard Java archive directory containing metadata.\n    *   **`MANIFEST.MF`**: The manifest file, containing main class information and other JAR metadata.\n    *   **Mod Loader Specific Files**: This is critical for how the mod is loaded.\n        *   **Forge:** Look for `mods.toml`. This TOML file defines the mod's ID, version, display name, authors, dependencies on other mods, and other essential information for the Forge mod loader.\n        *   **Fabric/Quilt/NeoForge:** Look for `fabric.mod.json`. This JSON file serves a similar purpose to `mods.toml`, specifying mod ID, version, entry points (initialization classes), dependencies, contact information, etc.\n    *   **Signature Files (`.SF`, `.DSA`, `.RSA`)**: If the JAR is signed, these files contain digital signatures to verify its authenticity and integrity.\n\n*   **Java Class Files (`.class`)**: These are the compiled Java code that forms the core logic of the mod.\n    *   They are organized into **packages**, which are represented as a nested folder structure (e.g., `com/examplemod/items/MyCustomItem.class`). This structure mirrors the `package com.examplemod.items;` declaration in the Java source code.\n    *   [Jar Tools](/) can help you decompile these `.class` files into readable Java code, which is invaluable for understanding the mod's functionality.\n\n*   **`pack.mcmeta`**: A JSON file that is typically found at the root (`/`) of the JAR. It describes the mod as a resource pack to Minecraft, including a description and pack format number. For mods that only add code, this might be simple, but for mods adding significant assets, it's important.\n\n*   **Root-level Configuration Files (`/`) (Less Common in Modern Mods)**: Older mods, or some specific ones, might include default configuration files directly in the root `(/)` (e.g., `.properties`, `.cfg`, `.xml`). However, modern mods usually generate their user-configurable files in the `config/` directory of the Minecraft game instance after the first run. What you see in the JAR is often the default or template configuration.\n\n*   **License Files (`/`)**: (e.g., `LICENSE`, `LICENSE.txt`, `LICENSE.md`) Text files typically found at `(/)` specifying the permissions and restrictions for using, distributing, and modifying the mod.\n\n*   **`README.md` or `README.txt` (`/`)**: Often contains information about the mod, installation instructions, credits, or links, usually located at `(/)`.\n\n*   **`changelog.md` or `VERSIONS.txt` (`/`)**: May list changes between different versions of the mod, typically found at `(/)`.\n\n*   **`credits.txt` or `authors.json` (`/`)**: Lists the people involved in creating the mod, often found at `(/)`.\n\nThis structure helps organize the mod's components. When using [Jar Tools](/), clicking through these folders and files will give you a good sense of how the mod is built.\n\n### 5. Viewing File Contents\n\nClick on a file in the tree to view its content in the main panel:\n\n*   **Text-based files (`.json`, `.toml`, `.cfg`, `.txt`, `.md`, `.xml`, `.properties`):** [Jar Tools](/) will display these as plain text, often with syntax highlighting, making them easy to read.\n*   **`.class` files (Java Bytecode):**\n    *   [Jar Tools](/) will show a raw, often unreadable, representation of the bytecode by default.\n    *   It offers a **decompilation feature** that attempts to convert the bytecode back into human-readable Java source code. This is incredibly useful for understanding the mod's logic.\n    *   **Note:** Decompilation might be a Pro feature or have usage limits on the free tier. The resulting code is an approximation and might not be identical to the original source.\n*   **Other Binary Files:** For other binary file types (like sound files), [Jar Tools](/) will typically indicate that it's a binary file and may not display its content directly.\n\n### 6. Using the Search Function\n\n[Jar Tools](/) includes a search bar that allows you to find specific files by name within the mod archive. This is very helpful for quickly locating a particular configuration file, asset, or class.\n\n## What You Can Learn and Achieve\n\nBy exploring a mod with [Jar Tools](/), you can:\n\n*   **Understand its Structure:** See how a mod organizes its assets, data, and code.\n*   **Find Configuration Details:** Identify default settings if they are packaged within the mod.\n*   **Examine Assets:** Look at textures or read language files to see how text is defined.\n*   **Learn About Mod Logic (Advanced):** For those interested in Java or mod development, decompiling `.class` files can provide insights into how certain features are implemented.\n*   **Verify File Presence:** Check if expected files (like licenses or specific assets) are included.\n\n## Important Considerations & Disclaimers\n\n*   **Temporary In-Memory Editing:** While [Jar Tools](/) allows you to edit text files within the session, these changes are temporary and do not modify the original `.jar` on your system. Creating a fully functional mod with updated game logic requires proper recompilation and packaging outside of [Jar Tools](/).\n*   **Be Cautious with Modifications:** This tool is primarily for viewing and learning. Avoid making changes to files unless you understand the implications, as it could break the mod if you were to repackage it (a feature [Jar Tools](/) might offer for download).\n*   **Save & Download Modified JAR:** [Jar Tools](/) includes **Save As ZIP** (and **Export Modified JAR**) buttons, allowing you to download the current archive with any in-memory changes to text-based files. Note that edits to compiled `.class` files are not supported and will not be applied.\n*   **Security First:** [Jar Tools](/) helps you *view* files, it does not scan for malware or guarantee a mod's safety. **Always download mods from official and trusted sources.**\n*   **Respect Licenses:** Mods are the creative work of their authors. Pay attention to any included license files and respect the terms they set out.\n\n## Conclusion\n\n[Jar Tools](/) is a powerful and convenient utility for any Minecraft player or aspiring modder curious about what goes into a Minecraft mod. It lowers the barrier to exploring `.jar` files, allowing you to learn, troubleshoot, or simply satisfy your curiosity about the inner workings of your favorite additions to the game.\n\nHappy exploring! "
  , me = `---
title: Knowledge Base | Jar Tools
description: Comprehensive guides and tutorials for JAR file editing, decompilation, and management. Learn how to work with Java archives, class files, and more.
---

# JAR File Knowledge Base

This is the knowledge base for JAR Tools, containing comprehensive guides and tutorials for working with Java Archive files.`
  , Be = `---
title: JAR File Internals Explained
description: An overview of the internal structure of a JAR file, including the META-INF directory, manifest file, class files, and resources.
publishedDate: 2024-07-29
---

# JAR File Internals Explained

*Reading time: ~10 minutes • Last updated: April 2024*

---

While we often interact with JAR (Java Archive) files as single, opaque units – libraries to include or applications to run – their internal structure is well-defined and crucial to their function within the Java ecosystem. Understanding these internals provides valuable insight into how Java applications are packaged, loaded, and secured. This article delves deep into the anatomy of a JAR file, exploring its constituent parts and their significance.

[← First read: What is a JAR File?](/kb/what-is-a-jar-file)

## The Foundation: A Specialized ZIP Archive

As established in our introductory article, a JAR file is fundamentally built upon the [ZIP file format](https://en.wikipedia.org/wiki/ZIP_(file_format)). This means you can typically inspect the contents of a JAR file using standard archive tools (like 7-Zip, WinRAR, or the command-line \`unzip\` tool). The ZIP format provides the basic mechanisms for bundling multiple files and directories into a single container and applying compression to reduce size.

However, a JAR file isn't just *any* ZIP file. It adheres to specific conventions and includes special files and directories that provide metadata essential for the Java Runtime Environment (JRE) and other tools.

> **Note:** You can examine JAR files using our [online JAR file editor](/), which allows you to explore their contents without installing any special software.

## The Control Center: The \`META-INF\` Directory

The most distinctive feature differentiating a JAR from a generic ZIP archive is the presence of the \`META-INF\` directory at the root level. This directory serves as the central repository for metadata about the archive. Files within \`META-INF\` contain configuration information, security details, and other data used by the JVM, classloaders, development tools, and application servers.

While various tools or specifications might place custom files here, several standard files within \`META-INF\` have defined roles:

### 1. The Manifest File: \`META-INF/MANIFEST.MF\`

This is arguably the most important file within \`META-INF\`. The manifest is a plain text file containing key-value pairs (known as attributes or headers) organized into sections. It provides critical metadata about the JAR file's contents and intended usage.

The manifest file consists of a main section followed by optional individual sections for specific entries within the JAR. Key attributes commonly found in the **main section** include:

Example \`MANIFEST.MF\`:
\`\`\`manifest
Manifest-Version: 1.0
Created-By: 17.0.2 (Oracle Corporation)
Main-Class: com.example.MyApplication
Class-Path: lib/dependency1.jar lib/dependency2.jar
Implementation-Title: Example Application
Implementation-Version: 1.0.0
Implementation-Vendor: Example Corp
\`\`\`

*   \`Manifest-Version\`: Specifies the version of the manifest specification being used (e.g., \`1.0\`).
*   \`Created-By\`: Indicates the version and vendor of the Java implementation used to create the JAR file.
*   \`Main-Class\`: **Crucial for executable JARs.** Specifies the class containing the \`main\` method.
*   \`Class-Path\`: A space-separated list of relative paths to dependent JARs or directories.
*   \`Implementation-Title\`, \`Implementation-Version\`, \`Implementation-Vendor\`: Implementation details.
*   \`Specification-Title\`, \`Specification-Version\`, \`Specification-Vendor\`: Specification details.
*   \`Sealed\`: If \`true\`, indicates that all classes in specified packages must originate from this JAR.

Individual sections (starting with \`Name: ...\`) can provide attributes specific to entries, like content digests for signing.

**Note:** Manifest files have specific formatting rules (e.g., line length limits) usually handled by build tools.

### 2. Signature Files: \`META-INF/*.SF\`, \`META-INF/*.DSA\`, \`META-INF/*.RSA\`, \`META-INF/*.EC\`

If a JAR file is digitally signed, \`META-INF\` contains signature files for authenticity and integrity.

**Signature Files (\`*.SF\`)**
Contains cryptographic hashes (digests) of manifest entries.

**Signature Block Files (\`*.DSA\`, \`*.RSA\`, \`*.EC\`)**
Contains the digital signature of the \`.SF\` file and the signer's certificate.

The JVM uses these files to verify the JAR hasn't been tampered with.

### 3. Index File: \`META-INF/INDEX.LIST\`

An optional optimization file listing packages within this JAR and potentially others specified in the \`Class-Path\`. Classloaders use this to quickly locate classes, speeding up startup.

### 4. Service Provider Configuration: \`META-INF/services/\`

Used for Java's Service Provider Interface (SPI). Libraries providing implementations of a service place a file here named after the service interface. The file lists the concrete implementation classes.

Example: JDBC Driver

A driver might contain a file named \`META-INF/services/java.sql.Driver\` with the following content:

\`\`\`
com.example.jdbc.ExampleDriver
\`\`\`

This allows auto-discovery via \`ServiceLoader\`.

## Organizing Code: Package Structure and Class Files

Outside \`META-INF\`, the JAR mainly contains compiled \`.class\` files and resources, organized according to Java package structure.

Typical JAR Structure:

\`\`\`text
MyApp.jar
├── META-INF/
│   ├── MANIFEST.MF
│   └── services/
├── com/
│   └── example/
│       ├── app/
│       │   ├── Main.class
│       │   └── Controller.class
│       └── util/
│           └── StringUtils.class
└── resources/
    ├── config.properties
    └── images/
        └── logo.png
\`\`\`

*   **Class Files:** Stored mirroring the package hierarchy (e.g., \`com.example.Util\` is \`com/example/Util.class\`). Essential for classloaders.
*   **Resources:** Images, config files, etc., placed anywhere, often in logical directories. Accessed via \`Class.getResourceAsStream()\`.

## JAR vs. WAR vs. EAR

*   **JAR:** General purpose libraries, applications.
*   **WAR (Web Archive):** For web applications, contains \`WEB-INF\`, deployed to servlet containers.
*   **EAR (Enterprise Archive):** For enterprise apps, bundles WARs, EJB JARs, deployed to Java EE servers.

All are based on the JAR format.

## Conclusion

The JAR file format, built on ZIP, uses the \`META-INF\` directory (especially \`MANIFEST.MF\`) for critical metadata related to execution, dependencies, versioning, and security. Understanding this internal structure—manifest attributes, signature files, package organization—helps developers effectively use, troubleshoot, and package Java applications, even when relying on build tools for automation.

> **Try Our JAR File Editor**
> Ready to explore and edit JAR files online? Try our free [JAR File Editor tool](/) to browse, edit, and manage your JAR files directly in the browser. `
  , We = `---
title: Java Disassembler Online — View Bytecode with Jar Editor Online
description: Learn how to use Jar Editor Online as a Java disassembler online to view and inspect the bytecode of .class files directly in your browser.
publishedDate: 2025-05-09
---

# Java Disassembler Online: View Bytecode with Jar Editor Online

Understanding the compiled form of Java code, known as bytecode, is crucial for developers looking to delve deeper into the mechanics of their applications or third-party libraries. While a decompiler reconstructs Java source code, a **Java disassembler online** tool helps you view the low-level bytecode instructions within a \`.class\` file. Jar Editor Online provides functionalities that allow you to achieve this by inspecting the raw content of class files.

## What is Java Disassembly?

When you compile Java source code (\`.java\` files), the Java compiler (javac) transforms it into platform-independent bytecode. This bytecode is a set of instructions for the Java Virtual Machine (JVM). Disassembly is the process of taking these compiled \`.class\` files and translating the bytecode instructions back into a human-readable, assembly-like format.

This "disassembled" view shows you the specific JVM instructions, such as \`aload_0\`, \`invokevirtual\`, \`bipush\`, etc. It's a step below decompilation, offering a granular look at what the JVM actually executes.

## Why Use a Java Disassembler Online?

Using a **java disassembler online** offers several advantages:

*   **Accessibility:** No need to install local tools like \`javap\` (the Java Class File Disassembler included with the JDK). You can inspect bytecode from any device with a web browser.
*   **Convenience:** Quickly view the bytecode of a class file within a JAR you're already exploring or editing online.
*   **Learning Tool:** Helps in understanding how Java source code constructs translate to bytecode, which can be beneficial for performance optimization or advanced debugging.
*   **Verification:** Allows you to verify the output of a compiler or to inspect the results of bytecode manipulation.

## How Jar Editor Online Functions as a Java Disassembler Online

While Jar Editor Online's primary strength for human-readable code is its **Java decompiler** (which converts bytecode to Java source code), you can use it to view the raw, and effectively "disassembled," content of \`.class\` files.

Here's how to view the bytecode structure:

1.  **Upload Your JAR File:**
    *   Navigate to the [Jar Editor Online home page](/).
    *   Use the uploader to select the JAR file containing the \`.class\` files you wish to inspect.

2.  **Navigate to a \`.class\` File:**
    *   Once the JAR is loaded, the file tree will appear.
    *   Browse to the specific \`.class\` file you want to examine.
    *   Click on the \`.class\` file.

3.  **View Raw Class File Content:**
    *   The main content panel will display the content of the \`.class\` file. For \`.class\` files, Jar Editor Online attempts to show a textual representation of the binary content. This includes:
        *   Readable string constants embedded in the class.
        *   A representation of the binary data, where non-printable characters are often shown as dots or other placeholders.
    *   This raw view gives you an insight into the structure of the class file, and with knowledge of the class file format, you can identify sections like the constant pool, method definitions, and the bytecode instructions themselves.

    ![Raw Class File View in Jar Editor Online](/images/decompile-class-file.png)

4.  **For Human-Readable Java Source (Decompilation):**
    *   If your goal is to see Java source code instead of raw bytecode instructions, you would then use the "Decompile" feature.
    *   Learn more: [How to Decompile Java Class Files](/kb/how-to-decompile-class-files).

While Jar Editor Online doesn't provide a line-by-line mnemonic disassembly like \`javap\` directly in a separate view, inspecting the raw content of a class file serves a similar purpose for those familiar with the class file structure or looking for specific bytecode patterns or embedded strings. The true "disassembly" into JVM instructions is implicitly handled by the decompiler when it reconstructs the source code.

## Disassembly vs. Decompilation

It's important to distinguish:

*   **Disassembly:** Translates machine code or bytecode into a human-readable assembly language. For Java, this means viewing JVM bytecode instructions.
*   **Decompilation:** A more complex process that attempts to reverse-engineer high-level source code (like Java) from bytecode.

Jar Editor Online excels at **decompilation** and provides a basic way to inspect the raw bytecode content, which is the essence of what a **java disassembler online** would offer.

Using an online tool like Jar Editor Online simplifies the process of accessing and analyzing Java archives, whether you need to view bytecode or decompile to source.

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';" 
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Try Jar Editor Online Now - It's Free!">
    Try Now For Free!
  </a>
</div>

---

Explore more features and guides in our [Knowledge Base](/kb). `
  , Ve = `---
title: "Open JAR Files Online"
description: "Extract, view, edit and decompile JAR files directly in your browser - no installation required"
---

# Open JAR Files Online

<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';" 
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Try Jar Tools Now - It's Free!">
    Try Jar Tools Now - It's Free!
  </a>
</div>

Jar Tools: The All-in-One JAR File Tool

- **Extract** - View all JAR contents with hierarchical file browser
- **Edit** - Modify text files directly in your browser
- **Decompile** - Convert class files to readable Java source code
- **Search** - Find specific content across all files

### Video Tutorial: Saving Files

Watch this quick demonstration showing how to save modified files with Jar Tools:

<div className="rounded-lg overflow-hidden shadow-md border border-gray-200 my-4">
  <video 
    controls
    muted 
    loop 
    playsInline 
    className="w-full h-auto"
    poster="/images/save-file-poster.jpg"
  >
    <source src="/video/save-file.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="p-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
    Demo: Saving modified files and exporting JAR archives
  </div>
</div>

## Extract JAR File

<div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
  <h3 className="text-lg font-bold mb-2">Extraction instructions</h3>
  <p>Simple steps to open and extract JAR files online with Jar Tools.</p>
</div>

### How to open and extract JAR files:

1. To select your JAR file, you have two options:
   - Click the "Choose File" button in the upload area
   - Drag and drop your JAR file directly onto the upload area

2. The browser will process your file (completely in your browser - no uploads)

3. Once complete, you'll see:
   - A hierarchical file tree on the left showing all files and folders
   - Content viewer on the right for examining selected files
   - Color-coded icons showing which files are editable

4. To extract individual files:
   - Navigate to the file in the tree view
   - Select the file to view its contents
   - Click the "Download" button in the header to save to your device

## Frequently Asked Questions

### Is it safe to open JAR files online with Jar Tools?
Yes! Jar Tools processes all files directly in your browser - no data is uploaded to our servers. Your files never leave your computer. For additional security, you can disconnect from the internet after loading the page and it will still work perfectly.

### What browsers support Jar Tools's JAR extractor?
Jar Tools works on all modern browsers including Chrome, Firefox, Safari, and Edge. We've tested it on Windows, macOS, Linux, Android, and iOS devices. For the best experience with large JAR files, we recommend Chrome or Firefox.

### Why can't I open my JAR file?
Common issues include:
- The file might be corrupted - try opening it with another archive tool
- Very large JAR files might exceed browser memory limits - try a smaller file
- Some features might be restricted by your browser settings

### Can I use Jar Tools offline?
Once the page has loaded, you can disconnect from the internet and continue to use all features. This ensures maximum privacy and security for your files.

### What is a JAR file?
JAR (Java ARchive) files are compressed packages used for distributing Java applications and libraries. They contain compiled Java classes (.class files), resources, and metadata. JAR files use ZIP compression but are specifically organized for Java's class loading system.

## Pro Features

Upgrade to Jar Tools Pro for enhanced capabilities:

- **Unlimited Decompilations**: Convert as many class files as you need
- **Priority Processing**: Faster decompilation of complex class files
- **No Daily Limits**: Use all features without restrictions
- **Premium Support**: Get help when you need it

<div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
  <h3 className="text-lg font-bold mb-2">Rating</h3>
  <p>How was your experience with Jar Tools's JAR tools?</p>
  <div className="text-xl text-yellow-500">★★★★★</div>
</div>

---

With Jar Tools, you can extract, view, modify, and decompile JAR files all in one place, directly in your browser. No need to install Java development tools or specialized software. Start working with your JAR files immediately! `
  , Ye = '---\ntitle: "Programmatic API Access for Java Decompilation"\ndescription: "Learn how to use the free, public API endpoint to decompile .class files programmatically using tools like cURL. Ideal for scripting and automation."\n---\n\n# Programmatic API Access: Decompile `.class` Files\n\nWe now offer a free, public API endpoint that allows you to decompile single `.class` files programmatically. This endpoint is designed for developers, researchers, and anyone who needs to integrate Java decompilation into their automated workflows or scripts.\n\nThis guide will show you how to use this powerful new feature.\n\n## The Public API Endpoint\n\nThe endpoint is versioned and stable, ensuring that your scripts won\'t break unexpectedly.\n\n-   **URL**: `https://jar.tools/api/v1/decompile`\n-   **Method**: `POST`\n-   **Authentication**: None required.\n-   **Rate Limiting**: None. This endpoint is free and public.\n\n## Request Requirements\n\nTo use the endpoint, you must send a `multipart/form-data` request containing the `.class` file you wish to decompile.\n\n-   **Form Field**: `file`\n-   **File Type**: Must be a `.class` file.\n-   **File Size Limit**: 2MB maximum.\n\n## How to Use It with cURL\n\nThe easiest way to use the API is with a command-line tool like `cURL`. Here is a complete example of how to decompile a local file named `MyClass.class` and save the output to `MyClass.java`.\n\n```bash\ncurl -f -o MyClass.java -X POST https://jar.tools/api/v1/decompile \\\n  -F "file=@/path/to/your/MyClass.class"\n```\n\n### Command Breakdown:\n\n-   `curl`: The command-line tool for transferring data.\n-   `-f` or `--fail`: **(Important)** This flag tells `cURL` to fail silently on HTTP errors. Without it, if the server returns an error (e.g., you send an invalid file), `cURL` will still save the error message to your output file. With `-f`, the output file will not be created on failure.\n-   `-o MyClass.java`: This specifies the output file where the decompiled Java source will be saved.\n-   `-X POST`: Specifies that we are making a `POST` request.\n-   `-F "file=@/path/to/your/MyClass.class"`: This attaches your local `.class` file to the request in a `multipart/form-data` field named `file`.\n\n## Successful Response\n\nOn a successful request, the server will respond with:\n\n-   **HTTP Status**: `200 OK`\n-   **Content-Type**: `text/plain`\n-   **Response Body**: The raw, decompiled Java source code.\n\nThe server also includes a `Content-Disposition` header, which suggests the filename for the downloaded content (e.g., `MyClass.java`). The `-o` flag in `cURL` takes precedence for naming the file locally.\n\n## Error Handling\n\nIf your request fails, the server will respond with a non-`200` HTTP status code (e.g., `422 Unprocessable Entity` if the class file is corrupt) and a plain-text error message in the response body.\n\nBy using the `-f` flag, `cURL` will automatically detect these errors, prevent the creation of an output file, and exit with a non-zero status code, making it ideal for use in scripts. \n\n---\n\n## Feedback and Feature Requests\n\nThis public API is a new feature, and we welcome your feedback. If you have ideas for improvements, new features, or encounter any issues or need business support, please let us know.\n\n-   [**Feedback Form**](https://docs.google.com/forms/d/1Bg3qZrhzY_q661lyxopVzbN7gMYeZquFAZy3YsdxEY8/edit) '
  , qe = `---
title: "Binary File Security: Best Practices and Guidelines"
description: "Important security information for working with binary files including JAR files, executables, and other non-text content"
---

# Binary File Security: Best Practices and Guidelines

When working with binary files including JAR files, executables, images, archives, and other non-text content, it's essential to understand the security implications and take appropriate precautions. This page outlines our security practices and provides guidelines for safely working with downloadable content.

## Understanding Binary Files

Binary files contain non-text data and may include executable code or embedded content. Security precautions are necessary because:

- JAR files, executables, and scripts can execute code on your machine
- Images and documents may contain embedded executable content (steganography)
- Archives may contain malicious files disguised as safe content
- File extensions can be spoofed to hide true file types
- Modified binary files may behave differently from original files

## Our Security Practices

At Jar Editor Online, we prioritize your security:

1. **Browser-Based Processing**: All JAR files are processed entirely in your browser. We never upload your files to our servers.

2. **Client-Side Modifications**: When you edit a JAR file, all changes happen locally in your browser's memory.

3. **Transparency**: Modified JARs are clearly marked with "-modified" in the filename to distinguish them from originals.

4. **Explicit Consent**: We require acknowledgment of security implications before downloading any binary content (all file types detected as non-text).

5. **Content-Based Detection**: We analyze actual file content rather than relying on file extensions to determine if files are binary.

6. **No Code Injection**: Our platform never injects malicious code into your files.

7. **Pro User Experience**: Pro users who understand security implications can skip repetitive disclaimer modals for a streamlined workflow while maintaining all security protections.

## Best Practices for Binary File Security

When downloading and using binary files:

1. **Scan Before Use**: Always scan downloaded binary files with up-to-date antivirus software.

2. **Know the Source**: Only use binary files from trusted, verified sources.

3. **Check Digital Signatures**: Verify signatures when available to confirm authenticity.

4. **Keep Software Updated**: Maintain current versions of applications used to open binary files.

5. **Sandbox Testing**: When working with untrusted binary files, consider running them in isolated environments.

6. **Content Verification**: Be aware that images, documents, and archives may contain hidden executable content.

## Why Browsers Flag Binary Downloads

Browsers and security tools may flag binary downloads for several legitimate reasons:

- Binary files may contain executable code or embedded threats
- File extensions can be misleading and don't guarantee file safety
- Malware distributors often use various binary formats for distribution
- Browsers cannot automatically verify the safety of non-text content
- Images and documents may contain steganographic threats

This does not mean your specific file is harmful, but rather that caution should be exercised with any binary content.

## Understanding Disclaimer Modals

Our platform uses security disclaimer modals to ensure safe practices:

- **When they appear**: For all binary content detected through content analysis (not just file extensions)
- **Why they're important**: Binary files may contain executable code, embedded threats, or hidden content requiring explicit acknowledgment
- **What's protected**: All file downloads are client-side processed with content-based binary detection
- **Pro users**: Can bypass repetitive disclaimers while maintaining security awareness

## Recommendations for Developers

If you're a developer working with binary files:

1. **Checksum Verification**: Compute and verify checksums (SHA-256, MD5) to confirm file integrity.

2. **Content Inspection**: When possible, use appropriate tools to inspect the content of unknown binary files.

3. **Limit Permissions**: Use appropriate security policies to restrict file permissions and execution contexts.

4. **Document Modifications**: Keep records of changes made to binary files.

5. **Version Control**: Maintain original copies alongside modified versions.

6. **Trust Levels**: Consider your trust level with files - unknown sources require more caution than internal development files.

7. **Content Analysis**: Be aware that our platform uses content-based detection rather than extension-based identification for enhanced security.

## Report Security Issues

If you encounter any security concerns with our platform or the files you process, please contact us via [feedback form](https://docs.google.com/forms/d/1Bg3qZrhzY_q661lyxopVzbN7gMYeZquFAZy3YsdxEY8/edit)

---

By following these guidelines, you can safely benefit from binary file processing while minimizing security risks. `
  , He = `---
title: Using the String Constants View
description: Learn how to inspect, search, and manage string constants extracted directly from .class file bytecode using the Jar Editor Online String Constants View.
publishedDate: 2024-08-01 # Placeholder date - adjust as needed
---

# Using the String Constants View

*Last Updated: 2024-08-01*
---

## Introduction

Jar Editor Online offers a powerful "String Constants View" that allows you to inspect, search, modify, and revert string literals embedded directly within the bytecode of \`.class\` files inside your JAR. This is useful for quickly finding configuration values, API endpoints, UI text, or other string data without needing to decompile the entire class file.

*Caution is strongly advised* when modifying strings, as incorrect changes can easily corrupt the \`.class\` file and break the application.

## Accessing the String Constants View

1.  After uploading your JAR file, you'll initially see the standard **File Browser** view.
2.  Locate the toggle or tab control (likely near the top, perhaps labeled "View Mode" or similar) that switches between "File Browser" and "String Constants".
3.  Select **"Strings"**.

![Image Placeholder: Screenshot showing the button/tab to switch to String Constants View](/images/string-constants.png)

The editor will then analyze the \`.class\` files in your JAR and populate the String Constants list. This might take a moment, and a loading indicator may be displayed.

## Understanding the Interface

The String Constants View typically presents:

1.  **Introduction Text:** Explains the purpose of the view.
2.  **Search Bar:** Allows you to filter the list of strings.
3.  **String Constants List:** Displays the extracted strings. Each entry usually shows:
    *   The string value (in an input field).
    *   An indicator if the string has been changed (e.g., different background, asterisk).
    *   Location information (class, method, line number) on hover.
    *   Controls for editing or reverting (if modified).

![Image Placeholder: Screenshot of the String Constants View interface elements](placeholder-link-string-view-ui)

## Searching for Specific Strings

1.  Type your search query into the **Search Bar** at the top of the String Constants panel.
2.  The list will automatically filter (usually after a brief delay) to show only strings containing your query text (case-insensitive).

## Inspecting and Modifying Strings

*   **Inspection:** Simply scroll through the list or use the search bar to find and view the string constants.
*   **Modification (Use with Extreme Caution):**
    1.  Locate the string you want to change.
    2.  Click directly into the input field containing the string value.
    3.  Enter the new string value.
    4.  The change is saved automatically, and the string entry will be marked as modified.
    5.  **Warning:** Changing string lengths or introducing characters incompatible with the surrounding bytecode can easily corrupt the class file. Only make changes if you understand the potential consequences.

![Image Placeholder: Screenshot showing a string being edited and marked as modified](/images/string-editing.png)

## Identifying Changes

*   **Modified Strings:** Individual strings that you have edited in the String Constants list will be visually marked.
*   **Modified Files:** When you modify one or more strings originating from a specific \`.class\` file, that \`.class\` file will also be marked as modified (e.g., with an asterisk \`*\`) in the main **File Browser** view.

## Reverting Changes

You have two ways to revert modifications made via the String Constants view:

1.  **Revert a Single String:**
    *   Find the modified string entry in the String Constants list.
    *   Click the "Revert" icon (circular arrow) associated specifically with that string entry.
    *   This will restore only that single string to its original value.

    ![Image Placeholder: Screenshot showing the revert button next to a single string](/images/string-revert-single.png)

2.  **Revert All Changes for a File:**
    *   Switch back to the **File Browser** view.
    *   Select the \`.class\` file that contains the strings you want to revert (it should be marked as modified).
    *   In the file content header area (top right), click the main **"Revert"** button.
    *   This action will discard *all* modifications made to that specific \`.class\` file, including *all* string changes made via the String Constants view *and* any direct edits made to the file if it were editable text. The file will no longer be marked as modified.

    ![Image Placeholder: Screenshot highlighting the main "Revert" button in the File Browser header](/images/revert-class.png)

## Saving Your Modifications

String modifications are **not** saved individually. To persist your changes:

1.  Make all desired string modifications in the String Constants View.
2.  Navigate back to the **File Browser** view if needed.
3.  Click the main **"Save & Download JAR"** button (usually located in the overall header or footer of the editor).
4.  The tool will repackage the JAR file, incorporating your string modifications (and any other file edits).
5.  You will be prompted to download the modified JAR, which will typically have \`-modified.jar\` appended to its original name.
6.  **Always test the modified JAR thoroughly** to ensure your changes haven't introduced errors.

<div style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <a href="/" 
     style="background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px; /* Slightly larger font */
            font-weight: bold;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
     onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';" 
     onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
     title="Start using JAR Tools now for free!">
    Experience JAR Tools Now - It's Free!
  </a>
</div>

> Explore the [Jar Editor Online Knowledge Base](/kb) for more guides and tips. `
  , $e = `---
title: What is a JAR File? An In-Depth Introduction
description: A comprehensive overview of the Java Archive (JAR) file format, its purpose, benefits, structure, and common use cases in the Java ecosystem.
publishedDate: 2024-07-29
---

# What is a JAR File? An In-Depth Introduction

*Reading time: ~8 minutes • Last updated: April 2024*

---

In the vast ecosystem of Java development, you'll inevitably encounter files ending with the \`.jar\` extension. JAR, standing for **Java Archive**, is a fundamental packaging format used across the Java platform. But what exactly is a JAR file, why is it so important, and how does it work? This article provides a comprehensive overview for developers, system administrators, and anyone curious about this ubiquitous file format.

## The Core Concept: Packaging Java Code and Resources

At its heart, a JAR file is essentially a [ZIP file](https://en.wikipedia.org/wiki/ZIP_(file_format)) with a specific structure and purpose. Its primary function is to bundle multiple files into a single archive. This bundle typically includes:

*   **Compiled Java Class Files (\`.class\`):** These are the bytecode files generated by the Java compiler from your \`.java\` source code. They contain the instructions that the Java Virtual Machine (JVM) executes.
*   **Metadata and Configuration Files:** The most crucial metadata file is the **Manifest (\`META-INF/MANIFEST.MF\`)**. This special file contains information about the archive itself, such as the version, main class for executable JARs, classpath dependencies, and security attributes.
*   **Application Resources:** These can include images (\`.png\`, \`.gif\`, \`.jpg\`), audio files, property files (\`.properties\`), XML configuration files, internationalization bundles, native libraries, and any other data files your application needs to run.

Think of a JAR file as a self-contained delivery package for Java applications or libraries. Instead of distributing hundreds or thousands of individual files, developers can package everything neatly into a single JAR file, simplifying deployment, distribution, and management.

> **Did you know?**
> The JAR file format was introduced in JDK 1.1 in 1997, making it one of Java's oldest and most enduring features.

## Why Use JAR Files? Key Benefits

The widespread adoption of JAR files stems from several key advantages they offer:

1.  **Aggregation and Organization:** Bundling related files together makes applications and libraries easier to handle, distribute, and version. It keeps all necessary components in one place.
2.  **Compression:** Like standard ZIP files, JAR files compress their contents, reducing the overall file size. This saves disk space and significantly speeds up download times, especially crucial for web-based applications (like Applets, though less common now, or applications delivered via Java Web Start).
3.  **Portability:** JAR files are platform-independent, just like Java itself. A JAR file created on one operating system (like Windows) can be used without modification on another (like macOS or Linux), provided a compatible Java Runtime Environment (JRE) is installed.
4.  **Security:** JAR files can be digitally signed. Signing allows end-users to verify the authenticity and integrity of the code, ensuring it hasn't been tampered with and originates from a trusted source. This is particularly important for code downloaded from the internet.
5.  **Executable Applications:** By specifying a \`Main-Class\` entry in the manifest file, a JAR can be made directly executable. Users can run the application simply by double-clicking the JAR file (on systems configured to do so) or using the command: \`java -jar YourApp.jar\`. This simplifies application startup immensely.
6.  **Class Path Management:** The manifest file can define a \`Class-Path\` attribute, specifying other JAR files that the code within this JAR depends on. This helps manage dependencies, although modern build tools like Maven and Gradle offer more sophisticated dependency management.
7.  **Versioning:** The manifest allows developers to include version information for the packaged code and associated specifications, aiding in dependency tracking and compatibility checks.
8.  **Extensibility:** The JAR format supports various extensions and services, such as package sealing (preventing other code from defining classes in the same package) and service providers (part of the Java Extension Mechanism).

## Common Use Cases for JAR Files

JAR files are used in numerous scenarios within the Java world:

*   **Libraries and APIs:** Third-party libraries (e.g., Apache Commons, Log4j, Jackson JSON) are almost always distributed as JAR files. Developers include these JARs in their project's classpath to leverage the functionality they provide.
*   **Standalone Applications:** Desktop applications, server-side tools, and command-line utilities are often packaged as executable JARs for easy distribution and execution.
*   **Web Applications (WAR files):** While web applications are typically packaged as WAR (Web Application Archive) files, WAR files themselves follow the JAR structure and contain JAR files within their \`WEB-INF/lib\` directory to hold library dependencies.
*   **Enterprise Applications (EAR files):** Similar to WAR files, EAR (Enterprise Application Archive) files used in Java EE (now Jakarta EE) also adhere to the JAR format specification and bundle various modules (like WARs and EJB JARs) together.
*   **Applets and Java Web Start (Legacy):** Historically, JARs were the standard way to package Applets for web browsers and applications launched via Java Web Start (JWS). While these technologies are less prevalent now, they relied heavily on the JAR format.
*   **Plugins and Extensions:** Many applications with plugin architectures (like Eclipse IDE, Jenkins) use JAR files to package individual plugins or extensions.
*   **Mobile Development (Android - APKs):** While Android applications use the APK (Android Package Kit) format, APK files are conceptually similar to JARs. They are essentially ZIP archives containing compiled code (Dalvik bytecode), resources, assets, and a manifest file.

## JAR vs. ZIP: What's the Difference?

Since a JAR file *is* a ZIP file, what distinguishes it? The key difference lies in the **convention and the optional, but crucial, \`META-INF/MANIFEST.MF\` file**.

**ZIP File:**

*   General-purpose compression format
*   No specific internal structure
*   No manifest requirement
*   Used for any file types

**JAR File:**

*   Specific to Java ecosystem
*   Contains META-INF directory
*   Has package structure for classes
*   Special handling by JVM

You can often rename a \`.jar\` file to \`.zip\` and open it with standard archive tools to view its contents. However, creating a functional JAR often requires using the \`jar\` tool or build systems like Maven/Gradle to ensure the manifest and structure are correct.

## Creating and Using JAR Files

While you can manually create JARs using the \`jar\` command included with the JDK, modern Java development overwhelmingly relies on build automation tools:

Creating a JAR with the \`jar\` command:

\`\`\`bash
jar cf myapp.jar -C classes .
\`\`\`

Creating a JAR with Maven:

\`\`\`bash
mvn package
\`\`\`

Running a JAR file:

\`\`\`bash
java -jar myapp.jar
\`\`\`

These build tools handle the complexities of compiling code, managing dependencies (downloading required library JARs), packaging resources, and generating the correct \`MANIFEST.MF\` file automatically.

To use a JAR file (e.g., a library) in your project, you typically add it to your project's **classpath**. The classpath tells the JVM and the Java compiler where to find the necessary class files. Again, build tools manage this process seamlessly by declaring dependencies in their configuration files.

---

[Continue reading: JAR File Internals Explained](/kb/jar-file-internals) →

---

## Conclusion

The JAR file format is a cornerstone of Java development, providing a standardized, portable, and efficient way to package and distribute Java code and resources. Whether you're developing simple command-line tools, complex enterprise applications, or reusable libraries, understanding the purpose and structure of JAR files is essential. It simplifies deployment, improves organization, enables security features, and ultimately makes Java applications easier to manage and share. While build tools automate much of the creation process, knowing what goes inside a JAR file and why it's structured the way it is empowers developers to troubleshoot issues and leverage the full potential of the Java platform.

> **Try Our JAR File Editor**
> Ready to explore and edit JAR files online? Try our free [JAR File Editor tool](/) to browse, edit, and manage your JAR files directly in the browser. `
  , rs = Object.assign({
    "./about-jd-gui-decompiler.md": De,
    "./deep-security-scanning-explained.md": Ee,
    "./how-to-convert-jar-to-zip.md": _e,
    "./how-to-decompile-class-files.md": Pe,
    "./how-to-decompile-java-class-linux.md": Me,
    "./how-to-download-modified-jar.md": ze,
    "./how-to-edit-jar-linux-macos.md": Oe,
    "./how-to-edit-jar-windows.md": Le,
    "./how-to-view-minecraft-mods-jar-tools.md": Ue,
    "./index.md": me,
    "./jar-file-internals.md": Be,
    "./java-disassembler-online.md": We,
    "./open-jar-file-online.md": Ve,
    "./programmatic-api-access.md": Ye,
    "./security.md": qe,
    "./using-string-constants-view.md": He,
    "./what-is-a-jar-file.md": $e
})
  , os = () => {
    const [s,c] = i.useState([]);
    i.useEffect( () => {
        const l = Object.entries(rs).map( ([n,r]) => {
            const a = n.replace("./", "").replace(".md", "");
            try {
                if (typeof r != "string")
                    throw new Error(`Invalid content type for ${n}: expected string, got ${typeof r}`);
                const {data: d} = oe(r);
                return {
                    slug: a,
                    title: d.title || "Untitled Article",
                    description: d.description || "No description available.",
                    publishedDate: d.publishedDate || "1970-01-01",
                    featured: d.featured || !1
                }
            } catch (d) {
                return console.error(`[KB Index] Error parsing frontmatter for ${n}:`, d),
                {
                    slug: a,
                    title: "Error Parsing Article",
                    description: `Could not read metadata for ${a}.md`,
                    publishedDate: "1970-01-01",
                    featured: !1
                }
            }
        }
        );
        l.sort( (n, r) => {
            const a = new Date(n.publishedDate)
              , d = new Date(r.publishedDate);
            return isNaN(a.getTime()) ? 1 : isNaN(d.getTime()) ? -1 : d.getTime() - a.getTime()
        }
        ),
        c(l)
    }
    , []);
    const t = (l, n) => n ? e.jsx(ke, {
        size: 24,
        className: "text-blue-600"
    }) : l.includes("internals") ? e.jsx(W, {
        size: 24,
        className: "text-jar-500"
    }) : l.includes("what-is") ? e.jsx(Se, {
        size: 24,
        className: "text-jar-500"
    }) : e.jsx(Et, {
        size: 24,
        className: "text-jar-500"
    });
    return e.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [e.jsx("header", {
            className: "bg-white border-b border-gray-200",
            children: e.jsxs("nav", {
                className: "container mx-auto px-4 py-3 flex justify-between items-center",
                children: [e.jsx("h2", {
                    className: "text-lg font-semibold text-gray-700",
                    children: "Knowledge Base"
                }), e.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [e.jsxs(J, {
                        to: "/",
                        className: "flex items-center text-sm text-jar-600 hover:text-jar-800",
                        title: "Back to Jar Tool",
                        children: [e.jsx(te, {
                            size: 16,
                            className: "mr-1"
                        }), "Back to Jar Tool"]
                    }), e.jsx(J, {
                        to: "/",
                        className: "text-jar-600 hover:text-jar-800",
                        title: "Go to Home",
                        children: e.jsx(se, {
                            size: 20
                        })
                    })]
                })]
            })
        }), e.jsx("main", {
            className: "container mx-auto px-4 py-12",
            children: e.jsxs("div", {
                className: "max-w-3xl mx-auto",
                children: [e.jsxs("div", {
                    className: "mb-12 text-center",
                    children: [e.jsx(Dt, {
                        size: 40,
                        className: "text-jar-600 mx-auto mb-4"
                    }), e.jsx("h1", {
                        className: "text-3xl font-bold text-gray-800 mb-4",
                        style: {
                            fontFamily: "Space Grotesk, sans-serif"
                        },
                        children: "JAR File Knowledge Base"
                    }), e.jsx("p", {
                        className: "text-lg text-gray-600",
                        children: "Explore our growing library of articles about Java Archive (JAR) files, their structure, and how they work."
                    })]
                }), e.jsxs("div", {
                    className: "mb-12",
                    children: [e.jsx("h2", {
                        className: "text-xl font-semibold mb-6 text-gray-700 border-b pb-2",
                        children: "Available Articles"
                    }), e.jsx("div", {
                        className: "space-y-6",
                        children: s.length > 0 ? s.map(l => e.jsx(J, {
                            to: `/kb/${l.slug}`,
                            className: `block p-6 rounded-lg shadow-sm border transition-shadow duration-200 group ${l.featured ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg hover:border-blue-300" : "bg-white border-gray-200 hover:shadow-md hover:border-jar-200"}`,
                            children: e.jsxs("div", {
                                className: "flex items-start",
                                children: [e.jsx("div", {
                                    className: `p-3 rounded-full mr-4 mt-1 flex-shrink-0 ${l.featured ? "bg-blue-100" : "bg-jar-50"}`,
                                    children: t(l.slug, l.featured)
                                }), e.jsxs("div", {
                                    className: "flex-1",
                                    children: [e.jsxs("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [e.jsx("h3", {
                                            className: `text-xl font-semibold mb-0 ${l.featured ? "text-blue-900 group-hover:text-blue-700" : "text-gray-800 group-hover:text-jar-700"}`,
                                            children: l.title
                                        }), l.featured && e.jsx("span", {
                                            className: "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full",
                                            children: "NEW"
                                        })]
                                    }), e.jsx("p", {
                                        className: `mb-3 ${l.featured ? "text-blue-700" : "text-gray-600"}`,
                                        children: l.description
                                    }), e.jsx("span", {
                                        className: `text-sm group-hover:underline ${l.featured ? "text-blue-600" : "text-jar-600"}`,
                                        children: "Read article →"
                                    })]
                                })]
                            })
                        }, l.slug)) : e.jsx("p", {
                            className: "text-gray-500",
                            children: "No knowledge base articles found."
                        })
                    })]
                }), e.jsxs("div", {
                    className: "bg-jar-50 rounded-lg p-6 border border-jar-100",
                    children: [e.jsx("h2", {
                        className: "text-lg font-semibold mb-3 text-jar-800",
                        children: "Want more content?"
                    }), e.jsx("p", {
                        className: "text-jar-700 mb-4",
                        children: "We're constantly expanding our knowledge base. What JAR-related topics would you like to see covered next?"
                    }), e.jsx("a", {
                        href: "https://docs.google.com/forms/d/1Bg3qZrhzY_q661lyxopVzbN7gMYeZquFAZy3YsdxEY8/edit",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center text-sm font-medium text-jar-700 hover:text-jar-900",
                        children: "Suggest a topic →"
                    })]
                })]
            })
        }), e.jsx("footer", {
            className: "bg-gray-100 mt-12 py-6",
            children: e.jsxs("div", {
                className: "container mx-auto px-4 text-center text-gray-600 text-sm",
                children: ["© ", new Date().getFullYear(), " JAR File Editor. All rights reserved. | ", e.jsx(J, {
                    to: "/",
                    className: "hover:underline",
                    children: "Home"
                })]
            })
        })]
    })
}
;
function ls({source: s="kb_page", className: c=""}) {
    const [t,l] = i.useState("")
      , [n,r] = i.useState(!1)
      , [a,d] = i.useState(!1)
      , [p,o] = i.useState("")
      , m = q()
      , u = w => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)
      , f = async w => {
        if (w.preventDefault(),
        !t.trim()) {
            o("Email is required");
            return
        }
        if (!u(t)) {
            o("Please enter a valid email address");
            return
        }
        r(!0),
        o("");
        try {
            console.log("[EmailSignup] Sending PostHog event..."),
            m == null || m.capture("secure_scan_interest", {
                email: t,
                email_domain: t.split("@")[1],
                timestamp: new Date().toISOString(),
                feature: "secure_scan_fake_door",
                source: s
            }),
            console.log("[EmailSignup] PostHog event sent:", {
                email: t,
                email_domain: t.split("@")[1],
                source: s
            }),
            await new Promise(v => setTimeout(v, 1e3)),
            d(!0)
        } catch {
            o("Something went wrong. Please try again.")
        } finally {
            r(!1)
        }
    }
    ;
    return a ? e.jsxs("div", {
        className: `bg-green-50 border border-green-200 rounded-lg p-6 text-center ${c}`,
        children: [e.jsxs("div", {
            className: "flex items-center justify-center mb-3",
            children: [e.jsx(ke, {
                className: "w-6 h-6 text-green-600 mr-2"
            }), e.jsx("span", {
                className: "text-green-700 font-semibold",
                children: "✅ You're on the list!"
            })]
        }), e.jsx("p", {
            className: "text-green-600 text-sm",
            children: "We'll email you as soon as Secure-Scan is ready."
        })]
    }) : (console.log("[EmailSignup] Rendering component with source:", s),
    e.jsxs("div", {
        className: `bg-blue-50 border border-blue-200 rounded-lg p-6 ${c}`,
        children: [e.jsx("h3", {
            className: "text-lg font-semibold text-blue-900 mb-4",
            children: "Want to be first in line?"
        }), e.jsx("p", {
            className: "text-blue-700 mb-4 text-sm",
            children: "Drop your email and we'll notify you the moment it launches."
        }), e.jsxs("div", {
            className: "bg-white rounded-lg p-4 mb-4 border border-blue-100",
            children: [e.jsx("h4", {
                className: "text-sm font-semibold text-gray-800 mb-2",
                children: "What we'll scan for:"
            }), e.jsxs("ul", {
                className: "text-xs text-gray-600 space-y-1",
                children: [e.jsxs("li", {
                    children: ["• ", e.jsx("strong", {
                        children: "CVE Vulnerabilities"
                    }), " - Check all dependencies against security databases"]
                }), e.jsxs("li", {
                    children: ["• ", e.jsx("strong", {
                        children: "Hidden Malware"
                    }), " - 25,000+ YARA rules detect trojans, miners, backdoors"]
                }), e.jsxs("li", {
                    children: ["• ", e.jsx("strong", {
                        children: "Supply Chain Attacks"
                    }), " - Identify compromised libraries and dependencies"]
                }), e.jsxs("li", {
                    children: ["• ", e.jsx("strong", {
                        children: "Code Obfuscation"
                    }), " - Detect suspicious patterns and steganography"]
                }), e.jsxs("li", {
                    children: ["• ", e.jsx("strong", {
                        children: "Behavioral Analysis"
                    }), " - Multi-engine cloud reputation checking"]
                })]
            })]
        }), e.jsxs("form", {
            onSubmit: f,
            className: "space-y-3",
            children: [e.jsxs("div", {
                className: "flex gap-3",
                children: [e.jsxs("div", {
                    className: "flex-1 relative",
                    children: [e.jsx(Re, {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                    }), e.jsx(we, {
                        type: "email",
                        placeholder: "your@email.com",
                        value: t,
                        onChange: w => {
                            l(w.target.value),
                            o("")
                        }
                        ,
                        className: "pl-10 bg-white",
                        disabled: n
                    })]
                }), e.jsx(F, {
                    type: "submit",
                    disabled: n || !t.trim(),
                    className: "bg-blue-600 hover:bg-blue-700",
                    children: n ? e.jsxs(e.Fragment, {
                        children: [e.jsx(Ce, {
                            className: "w-4 h-4 mr-2 animate-spin"
                        }), "Joining..."]
                    }) : "Notify Me"
                })]
            }), p && e.jsx("p", {
                className: "text-sm text-red-600",
                children: p
            })]
        })]
    }))
}
const cs = Object.assign({
    "./about-jd-gui-decompiler.md": De,
    "./deep-security-scanning-explained.md": Ee,
    "./how-to-convert-jar-to-zip.md": _e,
    "./how-to-decompile-class-files.md": Pe,
    "./how-to-decompile-java-class-linux.md": Me,
    "./how-to-download-modified-jar.md": ze,
    "./how-to-edit-jar-linux-macos.md": Oe,
    "./how-to-edit-jar-windows.md": Le,
    "./how-to-view-minecraft-mods-jar-tools.md": Ue,
    "./index.md": me,
    "./jar-file-internals.md": Be,
    "./java-disassembler-online.md": We,
    "./open-jar-file-online.md": Ve,
    "./programmatic-api-access.md": Ye,
    "./security.md": qe,
    "./using-string-constants-view.md": He,
    "./what-is-a-jar-file.md": $e
})
  , ds = () => {
    console.log("[KbArticlePage] Component rendering...");
    const {slug: s} = Qe();
    K();
    const [c,t] = i.useState("")
      , [l,n] = i.useState({})
      , [r,a] = i.useState(!0)
      , [d,p] = i.useState(null);
    if (i.useEffect( () => {
        if (a(!0),
        p(null),
        !s) {
            p("Article slug is missing."),
            a(!1);
            return
        }
        const f = `./${s}.md`
          , w = cs[f];
        if (w)
            try {
                if (typeof w != "string")
                    throw new Error(`Invalid content type for ${f}: expected string, got ${typeof w}`);
                const {data: v, content: x} = oe(w);
                n(v),
                t(x),
                window.scrollTo(0, 0)
            } catch (v) {
                console.error("[Canonical] Error during markdown processing or canonical setup:", v),
                console.error("Error parsing markdown:", v),
                p("Failed to parse article content.")
            }
        else
            p("Article not found.");
        return a(!1),
        () => {}
    }
    , [s]),
    r)
        return e.jsx("div", {
            className: "container mx-auto px-4 py-12 text-center",
            children: "Loading article..."
        });
    if (d)
        return e.jsxs("div", {
            className: "min-h-screen bg-white flex flex-col",
            children: [e.jsx("header", {
                className: "bg-gray-50 border-b border-gray-200 sticky top-0 z-10",
                children: e.jsxs("nav", {
                    className: "container mx-auto px-4 py-3 flex justify-between items-center",
                    children: [e.jsxs(J, {
                        to: "/kb",
                        className: "flex items-center text-sm text-jar-600 hover:text-jar-800",
                        children: [e.jsx(ne, {
                            size: 16,
                            className: "mr-1"
                        }), "Knowledge Base"]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [e.jsxs(J, {
                            to: "/",
                            className: "flex items-center text-sm text-jar-600 hover:text-jar-800",
                            title: "Back to Jar Tool",
                            children: [e.jsx(te, {
                                size: 16,
                                className: "mr-1"
                            }), "Back to Jar Tool"]
                        }), e.jsx(J, {
                            to: "/",
                            className: "text-jar-600 hover:text-jar-800",
                            title: "Go to Home",
                            children: e.jsx(se, {
                                size: 20
                            })
                        })]
                    })]
                })
            }), e.jsx("main", {
                className: "flex-grow container mx-auto px-4 py-12 flex items-center justify-center",
                children: e.jsxs("div", {
                    className: "text-center text-red-600",
                    children: [e.jsxs("p", {
                        className: "text-xl font-semibold",
                        children: ["Error: ", d]
                    }), e.jsx(J, {
                        to: "/kb",
                        className: "text-jar-600 hover:underline mt-4 inline-block",
                        children: "Back to Knowledge Base"
                    })]
                })
            }), e.jsx("footer", {
                className: "bg-gray-100 py-6",
                children: e.jsxs("div", {
                    className: "container mx-auto px-4 text-center text-gray-600 text-sm",
                    children: ["© ", new Date().getFullYear(), " JAR File Editor. All rights reserved. | ", e.jsx(J, {
                        to: "/",
                        className: "hover:underline",
                        children: "Home"
                    })]
                })
            })]
        });
    const o = `${l.title || "Knowledge Base Article"} | Jar Tools`
      , m = l.description || "Knowledge Base article from JAR Tools - comprehensive guides for JAR file management and Java development."
      , u = s ? `https://jar.tools/kb/${s}` : void 0;
    return e.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [e.jsxs(Q, {
            defer: !1,
            children: [e.jsx("title", {
                children: o
            }), e.jsx("meta", {
                name: "description",
                content: m
            }), u ? e.jsx("link", {
                rel: "canonical",
                href: u
            }) : null, e.jsx("meta", {
                property: "og:type",
                content: "article"
            }), u ? e.jsx("meta", {
                property: "og:url",
                content: u
            }) : null, e.jsx("meta", {
                property: "og:title",
                content: o
            }), e.jsx("meta", {
                property: "og:description",
                content: m
            }), e.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }), e.jsx("meta", {
                name: "twitter:title",
                content: o
            }), e.jsx("meta", {
                name: "twitter:description",
                content: m
            })]
        }), e.jsx("header", {
            className: "bg-gray-50 border-b border-gray-200 sticky top-0 z-10",
            children: e.jsxs("nav", {
                className: "container mx-auto px-4 py-3 flex justify-between items-center",
                children: [e.jsxs(J, {
                    to: "/kb",
                    className: "flex items-center text-sm text-jar-600 hover:text-jar-800",
                    children: [e.jsx(ne, {
                        size: 16,
                        className: "mr-1"
                    }), "Knowledge Base"]
                }), e.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [e.jsxs(J, {
                        to: "/",
                        className: "flex items-center text-sm text-jar-600 hover:text-jar-800",
                        title: "Back to Jar Tool",
                        children: [e.jsx(te, {
                            size: 16,
                            className: "mr-1"
                        }), "Back to Jar Tool"]
                    }), e.jsx(J, {
                        to: "/",
                        className: "text-jar-600 hover:text-jar-800",
                        title: "Go to Home",
                        children: e.jsx(se, {
                            size: 20
                        })
                    })]
                })]
            })
        }), e.jsx("main", {
            className: "container mx-auto px-4 py-8 md:py-12",
            children: e.jsx("div", {
                className: "max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm border border-gray-100",
                children: e.jsxs("article", {
                    className: "prose lg:prose-xl max-w-none",
                    children: [l.title && e.jsx("h1", {
                        className: "text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-b pb-4",
                        style: {
                            fontFamily: "Space Grotesk, sans-serif"
                        },
                        children: l.title
                    }), ( () => {
                        const f = () => w => {
                            const v = x => {
                                if (!(!x || typeof x != "object")) {
                                    if (x.type === "element" && x.properties)
                                        for (const A of Object.keys(x.properties))
                                            /^on[a-z]+/i.test(A) && delete x.properties[A];
                                    if (Array.isArray(x.children))
                                        for (const A of x.children)
                                            v(A)
                                }
                            }
                            ;
                            v(w)
                        }
                        ;
                        return e.jsx(Xe, {
                            rehypePlugins: [et, f],
                            children: c
                        })
                    }
                    )(), s === "deep-security-scanning-explained" && e.jsx("div", {
                        className: "mt-8 pt-8 border-t border-gray-200 not-prose",
                        children: e.jsx(ls, {
                            source: "kb_deep_security_scanning"
                        })
                    })]
                })
            })
        }), e.jsx("footer", {
            className: "bg-gray-100 mt-12 py-6",
            children: e.jsxs("div", {
                className: "container mx-auto px-4 text-center text-gray-600 text-sm",
                children: ["© ", new Date().getFullYear(), " JAR File Editor. All rights reserved. | ", e.jsx(J, {
                    to: "/",
                    className: "hover:underline",
                    children: "Home"
                })]
            })
        })]
    })
}
;
function ms({open: s, onOpenChange: c, onProKeyGenerated: t, onCompleted: l}) {
    const {isProUser: n} = H()
      , [r,a] = i.useState("")
      , [d,p] = i.useState("")
      , [o,m] = i.useState(!1)
      , [u,f] = i.useState(!1)
      , [w,v] = i.useState("")
      , [x,A] = i.useState(!1)
      , y = q()
      , E = j => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j)
      , P = async j => {
        if (j.preventDefault(),
        !r.trim()) {
            v("Please tell us where you shared JAR Tools");
            return
        }
        if (!d.trim()) {
            v("Email is required");
            return
        }
        if (!E(d)) {
            v("Please enter a valid email address");
            return
        }
        m(!0),
        v("");
        try {
            y == null || y.capture("free_pro_share_submitted", {
                shared_link: r,
                email: d,
                email_domain: d.split("@")[1],
                platform: r.includes("instagram") ? "instagram" : r.includes("twitter") ? "twitter" : r.includes("facebook") ? "facebook" : r.includes("linkedin") ? "linkedin" : r.includes("youtube") ? "youtube" : r.includes("tiktok") ? "tiktok" : r.includes("reddit") ? "reddit" : r.includes("discord") ? "discord" : "other",
                timestamp: new Date().toISOString()
            }),
            f(!0),
            localStorage.setItem("freeProKeyModalCompleted", "true"),
            l == null || l()
        } catch (z) {
            console.error("Error tracking event:", z),
            v("Something went wrong. Please try again.")
        } finally {
            m(!1)
        }
    }
      , T = j => {
        j ? y == null || y.capture("free_pro_modal_opened", {
            timestamp: new Date().toISOString()
        }) : (y == null || y.capture("free_pro_modal_closed", {
            shared_link_entered: r.length > 0,
            email_entered: d.length > 0,
            submitted: u,
            timestamp: new Date().toISOString()
        }),
        setTimeout( () => {
            a(""),
            p(""),
            f(!1),
            v(""),
            m(!1),
            A(!1)
        }
        , 300)),
        c(j)
    }
    ;
    return e.jsx(ft, {
        open: s,
        onOpenChange: T,
        children: e.jsxs(gt, {
            className: "sm:max-w-lg",
            children: [e.jsxs(xt, {
                children: [e.jsxs(yt, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(Te, {
                        className: "w-5 h-5 text-blue-600"
                    }), "Get Free Pro Access"]
                }), e.jsx(bt, {
                    className: "text-left",
                    children: e.jsxs("span", {
                        children: [e.jsx("strong", {
                            children: "Spread the word and get 12 months of Pro for free!"
                        }), e.jsx("br", {}), e.jsx("br", {}), "Share JAR Tools on any platform and get 12 MONTHS FOR FREE."]
                    })
                })]
            }), u ? e.jsx("div", {
                className: "space-y-4",
                children: e.jsxs("div", {
                    className: "text-center py-6",
                    children: [e.jsxs("div", {
                        className: "text-green-600 font-medium mb-3 flex items-center justify-center gap-2",
                        children: [e.jsx(Fe, {
                            className: "w-6 h-6"
                        }), "✅ Thank you for spreading the word!"]
                    }), e.jsx("p", {
                        className: "text-gray-700 mb-4 leading-relaxed",
                        children: "We've received your submission and will verify your share within 24-48 hours. You'll receive a Gumroad discount code via email once verified."
                    }), e.jsx("p", {
                        className: "text-sm text-gray-500 mb-4",
                        children: "The discount code gives you 100% off for 12 months of Pro subscription - that's 12 months of premium features completely free!"
                    }), e.jsxs(F, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank"),
                        className: "gap-2",
                        children: [e.jsx(_t, {
                            className: "w-4 h-4"
                        }), "View Pro Features"]
                    })]
                })
            }) : e.jsxs("form", {
                onSubmit: P,
                className: "space-y-4",
                children: [e.jsx("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",
                    children: e.jsxs("p", {
                        className: "text-sm text-blue-800",
                        children: [e.jsx("strong", {
                            children: "Instructions:"
                        }), " Share JAR Tools on any social platform (Twitter, Instagram, Facebook, LinkedIn, etc.) or website, then provide the link and your email below to get your free 12 months of Pro access!"]
                    })
                }), e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx(pe, {
                        htmlFor: "email",
                        children: "Your Email Address"
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx(Re, {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                        }), e.jsx(we, {
                            id: "email",
                            type: "email",
                            placeholder: "your@email.com",
                            value: d,
                            onChange: j => {
                                p(j.target.value),
                                v("")
                            }
                            ,
                            className: "pl-10",
                            disabled: o,
                            required: !0
                        })]
                    }), e.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "We'll send your discount code here and may contact you to thank you!"
                    })]
                }), e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx(pe, {
                        htmlFor: "sharedLink",
                        children: "Where did you share JAR Tools?"
                    }), e.jsx(vt, {
                        id: "sharedLink",
                        placeholder: "Tell us where you shared JAR Tools (e.g., Twitter, Instagram, Facebook, Discord, your blog, etc.). Include links if you have them!",
                        value: r,
                        onChange: j => {
                            a(j.target.value),
                            v("")
                        }
                        ,
                        disabled: o,
                        required: !0,
                        rows: 3,
                        className: "resize-none"
                    }), e.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "Describe where you shared JAR Tools - social media, websites, forums, or anywhere else!"
                    })]
                }), w && e.jsx("p", {
                    className: "text-sm text-red-600",
                    children: w
                }), e.jsxs(wt, {
                    children: [e.jsx(F, {
                        type: "button",
                        variant: "outline",
                        onClick: () => T(!1),
                        disabled: o,
                        children: "Cancel"
                    }), e.jsx(F, {
                        type: "submit",
                        disabled: o,
                        className: "bg-green-600 hover:bg-green-700",
                        children: o ? e.jsxs(e.Fragment, {
                            children: [e.jsx(Ce, {
                                className: "w-4 h-4 mr-2 animate-spin"
                            }), "Submitting..."]
                        }) : "Get My 12 Months Free"
                    })]
                })]
            })]
        })
    })
}
const hs = () => {
    const {isProUser: s, activateLicense: c} = H()
      , [t,l] = i.useState(!1)
      , [n,r] = i.useState(!1)
      , [a,d] = i.useState(!1);
    i.useEffect( () => {
        const m = localStorage.getItem("freeProKeyModalCompleted");
        d(m === "true")
    }
    , []);
    const p = async m => {
        try {
            await c(m),
            console.log("[ProPage] Free Pro key activated successfully"),
            d(!0)
        } catch (u) {
            console.error("[ProPage] Failed to activate Free Pro key:", u)
        }
    }
    ;
    i.useEffect( () => {
        document.title = "JAR Tools Pro | Premium Features";
        const m = "https://jar.tools/pro";
        let u = document.querySelector('link[rel="canonical"]');
        return u ? u.setAttribute("href", m) : (u = document.createElement("link"),
        u.setAttribute("rel", "canonical"),
        u.setAttribute("href", m),
        document.head.appendChild(u)),
        () => {
            const f = "https://jar.tools/pro";
            console.log(`[Canonical Pro] Cleanup for /pro. Attempting to remove canonical: ${f}`);
            const w = document.querySelector(`link[rel='canonical'][href='${f}']`);
            w ? (document.head.removeChild(w),
            console.log("[Canonical Pro] Removed /pro canonical tag.")) : console.log("[Canonical Pro] Did not find /pro canonical tag to remove during cleanup.")
        }
    }
    , []);
    const o = [{
        icon: e.jsx(Mt, {
            size: 24,
            className: "text-emerald-500"
        }),
        title: "Unlimited Class Decompilation",
        description: "Built-in decompiler to view and analyze Java class files in source code format with unlimited number of decompilations.",
        status: "Available Now on Pro"
    }, {
        icon: e.jsx(de, {
            size: 24,
            className: "text-blue-500"
        }),
        title: "Advanced JSON Editor",
        description: "Professional JSON editing with unlimited validation, auto-formatting, and minification with advanced error analysis and no daily restrictions.",
        status: "Available Now on Pro"
    }, {
        icon: e.jsx(xe, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "Uninterrupted Flow",
        description: "Enjoy an uninterrupted editing experience with fewer confirmation dialogs, designed for power users who understand security implications.",
        status: "Available Now on Pro"
    }, {
        icon: e.jsx(W, {
            size: 24,
            className: "text-orange-500"
        }),
        title: "No Ads",
        description: "Clean, distraction-free JAR editing experience with no advertisements or promotional content in the file viewer interface.",
        status: "Available Now on Pro"
    }, {
        icon: e.jsx(W, {
            size: 24,
            className: "text-green-600"
        }),
        title: "Unrestricted JAR Decompiler",
        description: "Decompile entire JAR files with unlimited file sizes and class counts. Perfect for analyzing large Java applications.",
        status: "Available Now on Pro",
        link: "/jar-decompiler"
    }, {
        icon: e.jsx(Je, {
            size: 24,
            className: "text-blue-500"
        }),
        title: "Advanced Code Editor",
        description: "Full-featured code editor with syntax highlighting, auto-completion, and code formatting for all text files.",
        status: "Coming Soon"
    }, {
        icon: e.jsx(zt, {
            size: 24,
            className: "text-emerald-500"
        }),
        title: "Advanced Properties Editor",
        description: "Advanced properties file editor with validation, formatting, export to multiple formats (JSON, YAML, ENV), and 5 files per day for free users.",
        status: "Available Now on Pro"
    }, {
        icon: e.jsx(Ot, {
            size: 24,
            className: "text-yellow-500"
        }),
        title: "Security Scanner",
        description: "Analyze JARs for potential security vulnerabilities and outdated dependencies.",
        status: "Planned"
    }, {
        icon: e.jsx(Lt, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "Version Control",
        description: "Track changes with commit-like snapshots and branch management for your modifications.",
        status: "Research Phase"
    }, {
        icon: e.jsx(Ut, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "Change History",
        description: "Detailed history of all modifications with the ability to revert to any previous state.",
        status: "Research Phase"
    }, {
        icon: e.jsx(Bt, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "Cloud Integration",
        description: "Direct integration with cloud storage services for seamless file management.",
        status: "Research Phase"
    }, {
        icon: e.jsx(Wt, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "CLI Integration",
        description: "Command-line interface for power users to automate JAR modifications.",
        status: "Research Phase"
    }, {
        icon: e.jsx(xe, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "AI-Powered Features",
        description: "Smart suggestions for code improvements and automated documentation generation.",
        status: "Research Phase"
    }, {
        icon: e.jsx(Vt, {
            size: 24,
            className: "text-purple-500"
        }),
        title: "Automated Workflows",
        description: "Create and run custom automation scripts for batch modifications across multiple files.",
        status: "Research Phase"
    }, {
        icon: e.jsx(Yt, {
            size: 24,
            className: "text-emerald-500"
        }),
        title: "Plugin System",
        description: "Extend functionality with custom plugins for specialized file types or operations.",
        status: "Future"
    }, {
        icon: e.jsx(qt, {
            size: 24,
            className: "text-violet-500"
        }),
        title: "Team Features",
        description: "Collaborative editing and shared workspaces for team projects.",
        status: "Future"
    }];
    return e.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8",
        children: [e.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [e.jsx("div", {
                className: "mb-8",
                children: e.jsxs(J, {
                    to: "/",
                    className: "inline-flex items-center text-sm font-medium text-jar-600 hover:text-jar-800 transition-colors",
                    children: [e.jsx(ne, {
                        size: 16,
                        className: "mr-1"
                    }), "Back to Editor"]
                })
            }), e.jsxs("div", {
                className: "text-center mb-16",
                children: [e.jsx("div", {
                    className: "inline-block bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full mb-4 shadow-md",
                    children: e.jsx(Ae, {
                        size: 32,
                        className: "text-white"
                    })
                }), e.jsx("h1", {
                    className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: "JAR Tools Pro"
                }), e.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto mb-8",
                    children: "Unlock powerful features with JAR Tools Pro. Supercharge your Java archive management and decompilation workflow."
                }), e.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 items-center justify-center",
                    children: [e.jsx("a", {
                        href: "https://techigor.gumroad.com/l/JarEditorOnlinePro",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-md hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5",
                        children: e.jsxs("span", {
                            className: "flex items-center justify-center",
                            children: [e.jsx(ge, {
                                size: 20,
                                className: "mr-2"
                            }), "Get Started for $0.99/month"]
                        })
                    }), e.jsxs(F, {
                        size: "lg",
                        className: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-0",
                        title: "Share JAR Tools and get 12 months of Pro for free!",
                        onClick: () => r(!0),
                        children: [e.jsx("style", {
                            children: `
                @keyframes heartbeat {
                  0% { transform: scale(1); }
                  20% { transform: scale(1.2); }
                  40% { transform: scale(1); }
                  60% { transform: scale(1.2); }
                  80% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
              `
                        }), e.jsx(Fe, {
                            size: 20,
                            className: "mr-2",
                            style: {
                                animation: "heartbeat 1.5s ease-in-out infinite"
                            }
                        }), "Get Pro free"]
                    })]
                }), e.jsxs("p", {
                    className: "mt-4 text-sm text-gray-500",
                    children: [e.jsx("strong", {
                        children: "Launch Special:"
                    }), " Over 90% off! (was $11.99/month) ⏰ Don't miss out!"]
                }), e.jsx("div", {
                    className: "mt-6",
                    children: e.jsx(J, {
                        to: "/",
                        className: "inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-jar-700 bg-jar-100 hover:bg-jar-200 transition-colors",
                        children: "Try out free version"
                    })
                })]
            }), e.jsxs("div", {
                className: "mb-16",
                children: [e.jsxs("div", {
                    className: "mb-12",
                    children: [e.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2 text-center",
                        children: "Available Now with Pro"
                    }), e.jsx("p", {
                        className: "text-gray-600 text-center mb-8",
                        children: "Get these powerful features immediately when you upgrade"
                    }), e.jsx("ul", {
                        className: "space-y-4 max-w-3xl mx-auto",
                        children: o.filter(m => m.status === "Available Now on Pro").map( (m, u) => e.jsxs("li", {
                            className: "flex items-start",
                            children: [e.jsx("div", {
                                className: "flex-shrink-0 mr-4 mt-1",
                                children: m.icon
                            }), e.jsx("div", {
                                className: "flex-1",
                                children: m.link ? e.jsxs(J, {
                                    to: m.link,
                                    className: "group block hover:text-green-600 transition-colors",
                                    children: [e.jsxs("h3", {
                                        className: "text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors",
                                        children: [m.title, " →"]
                                    }), e.jsx("p", {
                                        className: "text-gray-600 text-sm mt-1",
                                        children: m.description
                                    })]
                                }) : e.jsxs(e.Fragment, {
                                    children: [e.jsx("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: m.title
                                    }), e.jsx("p", {
                                        className: "text-gray-600 text-sm mt-1",
                                        children: m.description
                                    })]
                                })
                            })]
                        }, u))
                    })]
                }), e.jsxs("div", {
                    children: [e.jsxs("div", {
                        className: "text-center mb-4",
                        children: [e.jsxs("button", {
                            onClick: () => l(!t),
                            className: "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors",
                            children: [e.jsx("span", {
                                children: "View Future Roadmap"
                            }), e.jsx(Pt, {
                                size: 16,
                                className: `ml-2 transform transition-transform ${t ? "rotate-180" : ""}`
                            })]
                        }), e.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "Features planned for development (not included in current Pro subscription)"
                        })]
                    }), t && e.jsxs("div", {
                        className: "mb-8",
                        children: [e.jsx("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-6 text-center",
                            children: "Coming in Future Updates"
                        }), e.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: o.filter(m => m.status !== "Available Now on Pro").map( (m, u) => e.jsxs("div", {
                                className: "bg-gray-50 border-gray-300 opacity-75 rounded-xl p-6 shadow-sm border transition-shadow duration-200",
                                children: [e.jsxs("div", {
                                    className: "flex items-start mb-4",
                                    children: [e.jsx("div", {
                                        className: "flex-shrink-0 p-2 bg-gray-100 border-gray-200 rounded-lg border",
                                        children: e.jsx("div", {
                                            className: "opacity-50 grayscale",
                                            children: m.icon
                                        })
                                    }), e.jsxs("div", {
                                        className: "ml-4",
                                        children: [e.jsx("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: m.title
                                        }), e.jsx("span", {
                                            className: "px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700",
                                            children: m.status
                                        })]
                                    })]
                                }), e.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: m.description
                                })]
                            }, u))
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100",
                children: [e.jsxs("div", {
                    className: "mb-8",
                    children: [e.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900 mb-4",
                        children: "Launch Special Offer"
                    }), e.jsxs("div", {
                        className: "flex flex-col md:flex-row justify-center items-center gap-8 mb-6",
                        children: [e.jsxs("div", {
                            className: "bg-white p-6 rounded-xl shadow-md border border-yellow-200 w-full md:w-auto relative overflow-hidden",
                            children: [e.jsx("div", {
                                className: "absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 transform rotate-0 text-sm font-medium",
                                children: "Launch Offer!"
                            }), e.jsx("div", {
                                className: "text-lg font-semibold text-gray-600 mb-2",
                                children: "Launch Special"
                            }), e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [e.jsxs("div", {
                                    className: "text-4xl font-bold text-yellow-600 mb-2",
                                    children: ["$0.99", e.jsx("span", {
                                        className: "text-lg text-gray-500",
                                        children: "/month"
                                    })]
                                }), e.jsx("span", {
                                    className: "bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold",
                                    children: "90%+ OFF"
                                })]
                            }), e.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: "Special monthly launch price"
                            }), e.jsx("p", {
                                className: "text-xs text-red-500 font-semibold mt-1",
                                children: "🔥 Limited Time Sale Price! 🔥"
                            }), e.jsxs("div", {
                                className: "mt-3 text-emerald-600 font-medium space-y-1",
                                children: [e.jsx("div", {
                                    children: "✓ All Pro features"
                                }), e.jsx("div", {
                                    children: "✓ Lock in lowest price"
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "text-2xl font-bold text-gray-400",
                            children: "→"
                        }), e.jsxs("div", {
                            className: "bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full md:w-auto opacity-75",
                            children: [e.jsx("div", {
                                className: "text-lg font-semibold text-gray-600 mb-2",
                                children: "Regular Price"
                            }), e.jsxs("div", {
                                className: "text-4xl font-bold text-gray-600 mb-2",
                                children: ["$11.99", e.jsx("span", {
                                    className: "text-lg text-gray-500",
                                    children: "/month"
                                })]
                            }), e.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: "Standard monthly subscription"
                            }), e.jsx("div", {
                                className: "mt-3 text-gray-500 font-medium space-y-1",
                                children: e.jsx("div", {
                                    children: "✓ All Pro features"
                                })
                            })]
                        })]
                    })]
                }), e.jsx("a", {
                    href: "https://techigor.gumroad.com/l/JarEditorOnlinePro",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-md hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5",
                    children: e.jsxs("span", {
                        className: "flex items-center justify-center",
                        children: [e.jsx(ge, {
                            size: 20,
                            className: "mr-2"
                        }), "Get Started for $0.99/month"]
                    })
                }), e.jsx("p", {
                    className: "mt-4 text-sm text-gray-500",
                    children: "Ends Soon! Launch Sale: $0.99/month (Monthly Subscription) • Cancel Anytime"
                })]
            })]
        }), e.jsx(ms, {
            open: n,
            onOpenChange: r,
            onProKeyGenerated: p,
            onCompleted: () => d(!0)
        })]
    })
}
  , us = ({onFileSelected: s, isDecompiling: c}) => {
    const t = i.useRef(null)
      , [l,n] = i.useState(!1)
      , [r,a] = i.useState(null)
      , d = async x => new Promise(A => {
        const y = new FileReader;
        y.onload = E => {
            var T;
            const P = (T = E.target) == null ? void 0 : T.result;
            if (P) {
                const j = new Uint8Array(P.slice(0, 4))
                  , z = j[0] === 202 && j[1] === 254 && j[2] === 186 && j[3] === 190;
                A(z)
            } else
                A(!1)
        }
        ,
        y.onerror = () => A(!1),
        y.readAsArrayBuffer(x)
    }
    )
      , p = i.useCallback(async x => {
        if (a(null),
        !x.name.toLowerCase().endsWith(".class")) {
            a("File must be a Java .class file");
            return
        }
        const A = 2 * 1024 * 1024;
        if (x.size > A) {
            a("File size must be less than 2MB");
            return
        }
        if (x.size === 0) {
            a("File cannot be empty");
            return
        }
        if (!await d(x)) {
            a("Invalid Java class file. File does not contain valid Java bytecode.");
            return
        }
        s(x)
    }
    , [s])
      , o = i.useCallback(x => {
        var y;
        const A = (y = x.target.files) == null ? void 0 : y[0];
        A && p(A)
    }
    , [p])
      , m = i.useCallback(x => {
        x.preventDefault(),
        x.stopPropagation(),
        n(!0)
    }
    , [])
      , u = i.useCallback(x => {
        x.preventDefault(),
        x.stopPropagation(),
        n(!1)
    }
    , [])
      , f = i.useCallback(x => {
        x.preventDefault(),
        x.stopPropagation()
    }
    , [])
      , w = i.useCallback(x => {
        x.preventDefault(),
        x.stopPropagation(),
        n(!1);
        const A = Array.from(x.dataTransfer.files);
        A.length > 0 && p(A[0])
    }
    , [p])
      , v = i.useCallback( () => {
        t.current && !c && t.current.click()
    }
    , [c]);
    return e.jsxs("div", {
        className: "w-full",
        children: [e.jsx("input", {
            ref: t,
            type: "file",
            accept: ".class",
            onChange: o,
            className: "hidden",
            disabled: c
        }), e.jsx("div", {
            className: `
          relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer
          ${l ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-25"}
          ${c ? "opacity-50 cursor-not-allowed" : ""}
        `,
            onDragEnter: m,
            onDragLeave: u,
            onDragOver: f,
            onDrop: w,
            onClick: v,
            children: e.jsxs("div", {
                className: "flex flex-col items-center space-y-4",
                children: [e.jsx("div", {
                    className: `
            rounded-full p-4 transition-colors
            ${l ? "bg-blue-100" : "bg-gray-100"}
          `,
                    children: c ? e.jsx("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"
                    }) : e.jsx(Ie, {
                        size: 32,
                        className: l ? "text-blue-600" : "text-gray-400"
                    })
                }), e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: c ? "Processing..." : "Drop your .class file here"
                    }), e.jsx("p", {
                        className: "text-gray-500",
                        children: c ? "Decompiling your Java class file..." : "or click to browse and select a file"
                    })]
                }), e.jsxs(F, {
                    variant: "outline",
                    disabled: c,
                    className: "mt-4",
                    children: [e.jsx(Ht, {
                        size: 16,
                        className: "mr-2"
                    }), c ? "Processing..." : "Select File"]
                }), e.jsxs("div", {
                    className: "text-xs text-gray-400 space-y-1",
                    children: [e.jsx("p", {
                        children: "Supported: .class files (max 2MB)"
                    }), e.jsx("p", {
                        children: "Free unlimited decompilation"
                    })]
                })]
            })
        }), r && e.jsx("div", {
            className: "mt-4 p-4 bg-red-50 border border-red-200 rounded-lg",
            children: e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [e.jsx(ie, {
                    size: 16,
                    className: "text-red-500 flex-shrink-0"
                }), e.jsx("p", {
                    className: "text-red-700 text-sm",
                    children: r
                })]
            })
        }), e.jsxs("div", {
            className: "mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200",
            children: [e.jsx("h4", {
                className: "font-medium text-blue-900 mb-2",
                children: "How to use:"
            }), e.jsxs("ol", {
                className: "list-decimal list-inside space-y-1 text-sm text-blue-800",
                children: [e.jsx("li", {
                    children: "Upload a Java .class file (max 2MB) using the upload area above"
                }), e.jsx("li", {
                    children: "Wait for the decompilation process to complete"
                }), e.jsx("li", {
                    children: "View the decompiled Java source code with syntax highlighting"
                }), e.jsx("li", {
                    children: "Download the .java file or copy the code to your clipboard"
                })]
            }), e.jsxs("p", {
                className: "text-blue-700 text-sm mt-3",
                children: [e.jsx("strong", {
                    children: "Note:"
                }), " This tool works with standard Java .class files compiled by javac or similar compilers. Obfuscated or heavily modified bytecode may not decompile perfectly."]
            })]
        })]
    })
}
  , ps = ({result: s, onReset: c}) => {
    const [t,l] = i.useState(!1)
      , n = q()
      , r = () => {
        const o = new Blob([s.sourceCode],{
            type: "text/java"
        });
        ve.saveAs(o, s.filename),
        n == null || n.capture("class_decompile_download", {
            filename: s.filename,
            sourceLength: s.sourceCode.length,
            timestamp: new Date().toISOString()
        })
    }
      , a = async () => {
        try {
            await navigator.clipboard.writeText(s.sourceCode),
            l(!0),
            setTimeout( () => l(!1), 2e3),
            n == null || n.capture("class_decompile_copy", {
                filename: s.filename,
                sourceLength: s.sourceCode.length,
                timestamp: new Date().toISOString()
            })
        } catch (o) {
            console.error("Failed to copy to clipboard:", o)
        }
    }
      , d = o => {
        if (o === 0)
            return "0 B";
        const m = 1024
          , u = ["B", "KB", "MB"]
          , f = Math.floor(Math.log(o) / Math.log(m));
        return parseFloat((o / Math.pow(m, f)).toFixed(1)) + " " + u[f]
    }
      , p = o => o < 1e3 ? `${o}ms` : `${(o / 1e3).toFixed(1)}s`;
    return e.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg overflow-hidden",
        children: [e.jsx("div", {
            className: "bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-b",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [e.jsx("div", {
                        className: "bg-green-100 rounded-full p-2",
                        children: e.jsx(Z, {
                            size: 20,
                            className: "text-green-600"
                        })
                    }), e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "Decompilation Successful"
                        }), e.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: s.filename
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center space-x-4 text-sm text-gray-600",
                    children: [e.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [e.jsx($t, {
                            size: 14
                        }), e.jsx("span", {
                            children: d(s.originalSize)
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [e.jsx(Gt, {
                            size: 14
                        }), e.jsx("span", {
                            children: p(s.decompileTime)
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [e.jsx(Zt, {
                            size: 14
                        }), e.jsxs("span", {
                            children: [s.sourceCode.split(`
`).length, " lines"]
                        })]
                    })]
                })]
            })
        }), e.jsx("div", {
            className: "px-6 py-4 bg-gray-50 border-b",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [e.jsxs(F, {
                        onClick: r,
                        variant: "outline",
                        className: "bg-white border-gray-300 text-gray-700 hover:bg-gray-50",
                        children: [e.jsx(X, {
                            size: 16,
                            className: "mr-2"
                        }), "Download .java"]
                    }), e.jsx(F, {
                        onClick: a,
                        variant: "outline",
                        className: t ? "bg-green-50 border-green-300 text-green-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50",
                        children: t ? e.jsxs(e.Fragment, {
                            children: [e.jsx(Z, {
                                size: 16,
                                className: "mr-2"
                            }), "Copied!"]
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx(Kt, {
                                size: 16,
                                className: "mr-2"
                            }), "Copy Code"]
                        })
                    })]
                }), e.jsx(F, {
                    onClick: c,
                    className: "bg-blue-600 hover:bg-blue-700 text-white",
                    children: "Decompile Another File"
                })]
            })
        }), e.jsx("div", {
            className: "max-h-[600px] overflow-auto",
            children: e.jsx(dt, {
                language: "java",
                style: mt,
                showLineNumbers: !0,
                lineNumberStyle: {
                    minWidth: "3em",
                    paddingRight: "1em",
                    color: "#9ca3af",
                    borderRight: "1px solid #e5e7eb",
                    marginRight: "1em"
                },
                customStyle: {
                    margin: 0,
                    padding: "1.5rem",
                    backgroundColor: "#ffffff",
                    fontSize: "14px",
                    lineHeight: "1.5"
                },
                codeTagProps: {
                    style: {
                        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
                    }
                },
                children: s.sourceCode
            })
        }), e.jsx("div", {
            className: "px-6 py-3 bg-gray-50 border-t text-sm text-gray-500",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("p", {
                    children: ["Decompiled with JAR Tools •", e.jsxs("span", {
                        className: "ml-1",
                        children: [s.sourceCode.length.toLocaleString(), " characters"]
                    })]
                }), e.jsx("p", {
                    children: "Free unlimited decompilation"
                })]
            })
        })]
    })
}
  , fs = () => {
    const [s,c] = i.useState(!1)
      , [t,l] = i.useState(null)
      , [n,r] = i.useState(null)
      , [a] = tt()
      , d = K()
      , p = re()
      , o = q()
      , {isProUser: m} = H()
      , [u] = i.useState( () => le())
      , [f,w] = i.useState(null)
      , [v,x] = i.useState(!1)
      , [A,y] = i.useState(!1)
      , [E,P] = i.useState(!1);
    i.useEffect( () => {
        o == null || o.capture("class_decompiler_page_visited", {
            timestamp: new Date().toISOString()
        })
    }
    , [o]),
    i.useEffect( () => {
        const g = window.location.hash;
        if (g) {
            const k = document.getElementById(g.substring(1));
            k && setTimeout( () => {
                k.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            , 100)
        }
    }
    , []),
    i.useEffect( () => {
        const g = p.state;
        g != null && g.uploadedFile && (g != null && g.fromJarUploader) && (j(g.uploadedFile),
        d(p.pathname, {
            replace: !0
        }))
    }
    , [p.state]),
    i.useEffect( () => {
        const g = a.get("share");
        g && !t && T(g)
    }
    , [a]);
    const T = async g => {
        try {
            c(!0);
            const k = await fetch(Y(`/api/v1/share/${g}`));
            if (!k.ok)
                throw k.status === 404 ? new Error("Shared content not found or has expired") : new Error(`Failed to load shared content: ${k.status}`);
            const R = await k.json();
            if (R.success && R.data)
                l(R.data),
                o == null || o.capture("class_decompile_shared_accessed", {
                    shareId: g,
                    filename: R.data.filename,
                    timestamp: new Date().toISOString()
                });
            else
                throw new Error(R.error || "Failed to load shared content")
        } catch (k) {
            console.error("Failed to fetch shared decompilation:", k);
            const R = k instanceof Error ? k.message : "Failed to load shared content";
            r(R)
        } finally {
            c(!1)
        }
    }
      , j = async g => {
        r(null),
        l(null),
        c(!0);
        const k = Date.now();
        try {
            o == null || o.capture("class_decompile_started", {
                filename: g.name,
                fileSize: g.size,
                timestamp: new Date().toISOString()
            });
            const R = new FormData;
            R.append("file", g),
            console.log("🔧 Decompile Request Debug:", {
                filename: g.name,
                fileSize: g.size,
                fileType: g.type,
                endpoint: Y("/api/v1/decompile"),
                timestamp: new Date().toISOString()
            });
            try {
                const S = await g.slice(0, 100).arrayBuffer()
                  , D = new Uint8Array(S)
                  , U = Array.from(D).map(O => O.toString(16).padStart(2, "0")).join(" ");
                console.log("🔧 File content sample (first 100 bytes):", U)
            } catch (S) {
                console.log("🔧 Could not read file content for debugging:", S)
            }
            const I = await fetch(Y("/api/v1/decompile"), {
                method: "POST",
                body: R
            });
            if (console.log("🔧 Decompile Response:", {
                status: I.status,
                statusText: I.statusText,
                headers: Object.fromEntries(I.headers.entries()),
                url: I.url
            }),
            !I.ok) {
                let S;
                try {
                    S = await I.text(),
                    console.log("🔧 Error response body:", S)
                } catch (D) {
                    console.log("🔧 Could not read error response body:", D)
                }
                throw new Error(`Server error: ${I.status} ${I.statusText} - ${S || "No error details"}`)
            }
            const h = await I.text()
              , C = Date.now() - k
              , b = {
                sourceCode: h,
                filename: g.name.replace(".class", ".java"),
                originalSize: g.size,
                decompileTime: C
            };
            l(b),
            o == null || o.capture("class_decompile_success", {
                filename: g.name,
                fileSize: g.size,
                decompileTime: C,
                sourceLength: h.length,
                timestamp: new Date().toISOString()
            })
        } catch (R) {
            r("Decompilation failed. Please check your .class file and try again.");
            const I = R instanceof Error ? R.message : "Unknown error";
            o == null || o.capture("class_decompile_error", {
                filename: g.name,
                fileSize: g.size,
                error: I,
                timestamp: new Date().toISOString()
            })
        } finally {
            c(!1)
        }
    }
      , z = async g => {
        if (!E) {
            P(!0);
            try {
                const k = await fetch(Y("/api/v1/share"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        sourceCode: g.sourceCode,
                        filename: g.filename,
                        originalSize: g.originalSize,
                        decompileTime: g.decompileTime
                    })
                });
                if (!k.ok)
                    throw new Error(`Failed to create share: ${k.status}`);
                const R = await k.json();
                if (R.success) {
                    const h = `${window.location.origin}${R.shareUrl}`;
                    w(h),
                    x(!0),
                    o == null || o.capture("class_decompile_share_created", {
                        shareId: R.shareId,
                        filename: g.filename,
                        timestamp: new Date().toISOString()
                    })
                } else
                    throw new Error(R.error || "Failed to create share")
            } catch (k) {
                console.error("Failed to generate share URL:", k),
                r("Failed to create shareable link. Please try again.")
            } finally {
                P(!1)
            }
        }
    }
      , L = () => {
        t && (f ? x(!v) : z(t))
    }
      , N = async () => {
        if (f)
            try {
                await navigator.clipboard.writeText(f),
                y(!0),
                setTimeout( () => y(!1), 2e3),
                o == null || o.capture("class_decompile_share_copied", {
                    filename: t == null ? void 0 : t.filename,
                    timestamp: new Date().toISOString()
                })
            } catch (g) {
                console.error("Failed to copy share URL:", g)
            }
    }
      , M = () => {
        l(null),
        r(null),
        w(null),
        x(!1),
        y(!1),
        P(!1),
        d("/class-decompiler", {
            replace: !0
        }),
        o == null || o.capture("class_decompiler_reset", {
            timestamp: new Date().toISOString()
        })
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(Q, {
            defer: !1,
            children: [e.jsx("meta", {
                name: "keywords",
                content: "java class decompiler, decompile class file online, java decompiler free, class to java converter, bytecode decompiler, java reverse engineering, CFR decompiler online, class file viewer"
            }), e.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }), e.jsx("meta", {
                name: "language",
                content: "English"
            }), e.jsx("meta", {
                name: "author",
                content: "JAR Tools"
            }), e.jsx("meta", {
                name: "theme-color",
                content: "#4f46e5"
            }), e.jsx("meta", {
                name: "application-name",
                content: "JAR Tools Class Decompiler"
            }), e.jsx("meta", {
                name: "apple-mobile-web-app-title",
                content: "Java Decompiler"
            }), e.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#4f46e5"
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    name: "Java Class Decompiler Online",
                    description: "Java Class Decompiler online",
                    url: "https://jar.tools/class-decompiler",
                    applicationCategory: "DeveloperApplication",
                    operatingSystem: "Any",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD"
                    },
                    creator: {
                        "@type": "Organization",
                        name: "JAR Tools",
                        url: "https://jar.tools"
                    },
                    featureList: ["Upload .class files", "Decompile to Java source code", "Syntax highlighting", "Share results securely", "Download decompiled code", "No registration required"]
                })
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [{
                        "@type": "ListItem",
                        position: 1,
                        name: "JAR Tools",
                        item: "https://jar.tools"
                    }, {
                        "@type": "ListItem",
                        position: 2,
                        name: "Class Decompiler",
                        item: "https://jar.tools/class-decompiler"
                    }]
                })
            }), e.jsx("script", {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: [{
                        "@type": "Question",
                        name: "How do I decompile Java class files online?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Upload your .class file to our online decompiler, click decompile, and view the readable Java source code with syntax highlighting. You can then download or share the results."
                        }
                    }, {
                        "@type": "Question",
                        name: "Is the Java class decompiler free to use?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes, our Java class decompiler is completely free with no registration required. You can decompile unlimited .class files and share results with secure links."
                        }
                    }, {
                        "@type": "Question",
                        name: "What file formats are supported?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "The decompiler supports .class files compiled from Java source code. Maximum file size is 2MB per upload."
                        }
                    }]
                })
            })]
        }), e.jsxs("div", {
            className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
            children: [e.jsx(je, {
                type: "class-decompiler"
            }), e.jsx("div", {
                className: "container mx-auto px-4 pt-6 sm:pt-8",
                children: e.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [e.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text",
                        children: "Java Class Decompiler"
                    }), e.jsx("p", {
                        className: "text-sm text-gray-600 mb-3 max-w-2xl",
                        children: "Convert compiled .class files back to readable Java source code. Useful for code analysis, debugging, reverse engineering, and recovering lost source files."
                    }), e.jsx("div", {
                        className: "w-16 h-1 bg-purple-600 rounded-full"
                    })]
                })
            }), a.get("share") && t && e.jsx("div", {
                className: "bg-blue-50 border-b border-blue-200",
                children: e.jsx("div", {
                    className: "container mx-auto px-4 py-3",
                    children: e.jsx("div", {
                        className: "max-w-4xl mx-auto",
                        children: e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [e.jsx(Te, {
                                size: 18,
                                className: "text-blue-600"
                            }), e.jsxs("span", {
                                className: "text-blue-800 font-medium",
                                children: ["Viewing shared decompilation: ", t.filename]
                            }), e.jsx(jt, {
                                variant: "secondary",
                                className: "bg-blue-100 text-blue-700",
                                children: "Shared Content"
                            })]
                        })
                    })
                })
            }), e.jsx("div", {
                className: "container mx-auto px-4 py-8",
                children: e.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [!t && !n && e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            id: "upload",
                            className: "bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 scroll-mt-20",
                            children: e.jsx(us, {
                                onFileSelected: j,
                                isDecompiling: s
                            })
                        }), !m && e.jsx("div", {
                            className: "mb-8",
                            children: e.jsx(ce, {
                                adSlot: "1234567890",
                                adFormat: "auto",
                                campaign: u,
                                context: {
                                    viewer: "class-decompiler",
                                    filePath: "",
                                    fileType: "class",
                                    jarName: "",
                                    jarInstanceId: ""
                                },
                                variant: "small",
                                isMinecraftMod: null,
                                isMainPageAd: !0,
                                className: ""
                            })
                        }), e.jsxs("div", {
                            className: "grid md:grid-cols-3 gap-6 mb-8",
                            children: [e.jsxs("div", {
                                className: "bg-white rounded-lg p-6 shadow-sm border",
                                children: [e.jsx(Z, {
                                    size: 32,
                                    className: "text-green-500 mb-3"
                                }), e.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Free & Unlimited"
                                }), e.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "No rate limits, no registration required. Decompile as many files as you need."
                                })]
                            }), e.jsxs("div", {
                                className: "bg-white rounded-lg p-6 shadow-sm border",
                                children: [e.jsx(G, {
                                    size: 32,
                                    className: "text-blue-500 mb-3"
                                }), e.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Syntax Highlighting"
                                }), e.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "View decompiled code with proper Java syntax highlighting for better readability."
                                })]
                            }), e.jsxs("div", {
                                className: "bg-white rounded-lg p-6 shadow-sm border",
                                children: [e.jsx(X, {
                                    size: 32,
                                    className: "text-purple-500 mb-3"
                                }), e.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Download Results"
                                }), e.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "Save the decompiled Java source code as a .java file for use in your projects."
                                })]
                            })]
                        })]
                    }), s && e.jsxs("div", {
                        className: "bg-white rounded-lg shadow-lg p-8 text-center",
                        children: [e.jsx("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                        }), e.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-2",
                            children: "Decompiling..."
                        }), e.jsx("p", {
                            className: "text-gray-600",
                            children: "Processing your Java class file. This usually takes a few seconds."
                        })]
                    }), n && e.jsx("div", {
                        className: "bg-white rounded-lg shadow-lg p-8",
                        children: e.jsxs("div", {
                            className: "text-center mb-6",
                            children: [e.jsx("div", {
                                className: "bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4",
                                children: e.jsx(G, {
                                    size: 40,
                                    className: "text-red-500"
                                })
                            }), e.jsx("h3", {
                                className: "text-xl font-semibold text-red-800 mb-2",
                                children: "Decompilation Failed"
                            }), e.jsx("p", {
                                className: "text-red-600 mb-4",
                                children: n
                            }), e.jsx(F, {
                                onClick: M,
                                variant: "outline",
                                children: "Try Another File"
                            })]
                        })
                    }), t && e.jsxs("div", {
                        className: "space-y-4",
                        children: [!a.get("share") && e.jsxs("div", {
                            className: "bg-white border border-gray-200 rounded-lg p-4",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [e.jsx("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Share this decompilation"
                                }), e.jsx(F, {
                                    onClick: L,
                                    variant: "outline",
                                    size: "sm",
                                    disabled: E,
                                    children: E ? "Creating..." : f ? "Copy Link" : "Create Link"
                                })]
                            }), f && e.jsxs("div", {
                                className: "space-y-2",
                                children: [e.jsxs("div", {
                                    className: "flex items-center bg-gray-50 p-2 rounded border",
                                    children: [e.jsx("input", {
                                        type: "text",
                                        value: f,
                                        readOnly: !0,
                                        className: "text-sm text-gray-600 bg-transparent border-none outline-none flex-1 truncate",
                                        onClick: g => g.target.select()
                                    }), e.jsx(F, {
                                        onClick: N,
                                        variant: "ghost",
                                        size: "sm",
                                        className: "ml-2 h-6 px-2",
                                        children: A ? "Copied!" : "Copy"
                                    })]
                                }), e.jsx("p", {
                                    className: "text-xs text-gray-500",
                                    children: "Link expires in 24 hours"
                                })]
                            })]
                        }), e.jsx(ps, {
                            result: t,
                            onReset: M
                        })]
                    })]
                })
            }), e.jsx(ee, {})]
        })]
    })
}
  , Ge = i.forwardRef( ({className: s, ...c}, t) => e.jsx("div", {
    ref: t,
    className: $("rounded-lg border bg-card text-card-foreground shadow-sm", s),
    ...c
}));
Ge.displayName = "Card";
const gs = i.forwardRef( ({className: s, ...c}, t) => e.jsx("div", {
    ref: t,
    className: $("flex flex-col space-y-1.5 p-6", s),
    ...c
}));
gs.displayName = "CardHeader";
const xs = i.forwardRef( ({className: s, ...c}, t) => e.jsx("h3", {
    ref: t,
    className: $("text-2xl font-semibold leading-none tracking-tight", s),
    ...c
}));
xs.displayName = "CardTitle";
const ys = i.forwardRef( ({className: s, ...c}, t) => e.jsx("p", {
    ref: t,
    className: $("text-sm text-muted-foreground", s),
    ...c
}));
ys.displayName = "CardDescription";
const Ze = i.forwardRef( ({className: s, ...c}, t) => e.jsx("div", {
    ref: t,
    className: $("p-6 pt-0", s),
    ...c
}));
Ze.displayName = "CardContent";
const bs = i.forwardRef( ({className: s, ...c}, t) => e.jsx("div", {
    ref: t,
    className: $("flex items-center p-6 pt-0", s),
    ...c
}));
bs.displayName = "CardFooter";
const vs = ({onFileSelected: s, isProcessing: c, selectedFile: t, onExtractJar: l, progress: n, stage: r, error: a, clearValidationError: d}) => {
    const p = i.useRef(null)
      , [o,m] = i.useState(!1)
      , [u,f] = i.useState(null)
      , [w,v] = i.useState(null)
      , [x,A] = i.useState(!1)
      , y = q()
      , {isProUser: E} = H();
    i.useEffect( () => {
        u && (d == null || d())
    }
    , [u, d]),
    i.useEffect( () => {
        let h = !1;
        return (async () => {
            if (!t || u) {
                v(null),
                A(!1);
                return
            }
            try {
                A(!0),
                v(null);
                const b = await st.loadAsync(t)
                  , S = b.file(/\.class$/i)
                  , D = b.file(/.*/)
                  , U = new Set;
                S.forEach(V => {
                    const he = V.name
                      , ue = he.lastIndexOf("/");
                    ue > 0 ? U.add(he.slice(0, ue).replace(/\//g, ".")) : U.add("(default)")
                }
                );
                const O = b.file(/^META-INF\/MANIFEST\.MF$/i).length > 0;
                if (!h) {
                    v(S.length);
                    const V = parseInt("400");
                    if (!E && S.length > V) {
                        f(`JAR file "${t.name}" contains ${S.length} classes, exceeding the ${V} class limit. Please reduce the number of classes or upgrade to Pro for higher limits.`),
                        y == null || y.capture("jar_upload_failed_validation", {
                            jar_name: t.name,
                            jar_size_bytes: t.size,
                            jar_size_mb: Math.round(t.size / (1024 * 1024)),
                            class_count: S.length,
                            failure_reason: "class_count_exceeded",
                            limit_exceeded: "class_count",
                            max_class_count: V,
                            package_count: U.size,
                            total_entries: D.length,
                            has_manifest: O,
                            timestamp: new Date().toISOString()
                        });
                        return
                    }
                    f(null),
                    y == null || y.capture("jar_upload_success", {
                        jar_name: t.name,
                        jar_size_bytes: t.size,
                        jar_size_mb: Number((t.size / (1024 * 1024)).toFixed(2)),
                        class_count: S.length,
                        total_entries: D.length,
                        package_count: U.size,
                        has_manifest: O,
                        timestamp: new Date().toISOString()
                    })
                }
            } catch (b) {
                h || (v(null),
                y == null || y.capture("jar_upload_failed_validation", {
                    jar_name: t.name,
                    jar_size_bytes: t.size,
                    jar_size_mb: Math.round(t.size / (1024 * 1024)),
                    failure_reason: "jar_analysis_failed",
                    limit_exceeded: "jar_analysis",
                    error_message: b instanceof Error ? b.message : String(b),
                    timestamp: new Date().toISOString()
                }))
            } finally {
                h || A(!1)
            }
        }
        )(),
        () => {
            h = !0
        }
    }
    , [t, u, E, y]);
    const P = h => h ? {
        processing: "Processing",
        decompiling: "Decompiling",
        zipping: "Creating archive",
        completed: "Complete",
        submitted: "Starting",
        queued: "In queue"
    }[h.toLowerCase()] || h : null
      , T = async h => new Promise(C => {
        const b = new FileReader;
        b.onload = S => {
            var U;
            const D = (U = S.target) == null ? void 0 : U.result;
            if (D) {
                const O = new Uint8Array(D.slice(0, 4))
                  , V = O[0] === 80 && O[1] === 75 && (O[2] === 3 && O[3] === 4 || O[2] === 5 && O[3] === 6);
                C(V)
            } else
                C(!1)
        }
        ,
        b.onerror = () => C(!1),
        b.readAsArrayBuffer(h)
    }
    )
      , j = i.useCallback(async h => {
        f(null),
        d == null || d(),
        s(h);
        const C = parseInt("104857600");
        if (!E && h.size > C) {
            const S = Math.round(h.size / 1048576)
              , D = Math.round(C / (1024 * 1024));
            f(`JAR file "${h.name}" size (${S}MB) exceeds the ${D}MB limit. Please reduce the file size or upgrade to Pro for higher limits.`),
            y == null || y.capture("jar_upload_failed_validation", {
                jar_name: h.name,
                jar_size_bytes: h.size,
                jar_size_mb: S,
                failure_reason: "file_size_exceeded",
                limit_exceeded: "file_size",
                max_size_mb: D,
                timestamp: new Date().toISOString()
            });
            return
        }
        if (!await T(h)) {
            f(`JAR file "${h.name}" has invalid format. Please select a valid Java archive.`),
            y == null || y.capture("jar_upload_failed_validation", {
                jar_name: h.name,
                jar_size_bytes: h.size,
                jar_size_mb: Math.round(h.size / (1024 * 1024)),
                failure_reason: "invalid_format",
                limit_exceeded: "file_format",
                timestamp: new Date().toISOString()
            });
            return
        }
    }
    , [s, d, E, y])
      , z = i.useCallback(h => {
        var b;
        const C = (b = h.target.files) == null ? void 0 : b[0];
        C && j(C)
    }
    , [j])
      , L = i.useCallback(h => {
        h.preventDefault(),
        h.stopPropagation(),
        m(!0)
    }
    , [])
      , N = i.useCallback(h => {
        h.preventDefault(),
        h.stopPropagation(),
        m(!1)
    }
    , [])
      , M = i.useCallback(h => {
        h.preventDefault(),
        h.stopPropagation()
    }
    , [])
      , g = i.useCallback(h => {
        h.preventDefault(),
        h.stopPropagation(),
        m(!1);
        const C = Array.from(h.dataTransfer.files);
        C.length > 0 && j(C[0])
    }
    , [j])
      , k = i.useCallback( () => {
        p.current && !c && (f(null),
        p.current.value = "",
        p.current.click())
    }
    , [c])
      , R = i.useCallback( () => {
        if (!(!t || !l)) {
            f(null),
            d == null || d();
            try {
                y == null || y.capture("jar_decompiler_started", {
                    file_name: t.name,
                    file_size_bytes: t.size,
                    file_size_mb: Number((t.size / (1024 * 1024)).toFixed(2)),
                    class_count: typeof w == "number" ? w : void 0
                })
            } catch {}
            l()
        }
    }
    , [l, y, t, w, d])
      , I = h => h < 1e4 ? "~5-10 seconds" : h < 1e5 ? "~10-20 seconds" : h < 5e5 ? "~20-45 seconds" : h < 7e5 ? "~45-75 seconds" : h < 15e5 ? "~60-90 seconds" : h < 5e6 ? "~90-180 seconds" : "~3-5 minutes";
    return e.jsxs("div", {
        className: "w-full",
        children: [e.jsx("input", {
            ref: p,
            type: "file",
            accept: ".jar",
            onChange: z,
            className: "hidden",
            disabled: c
        }), t ? e.jsx("div", {
            className: "border-2 border-dashed border-gray-300 bg-white rounded-lg p-4",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [e.jsx(W, {
                        size: 20,
                        className: "text-gray-600"
                    }), e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "font-medium text-gray-800",
                            children: t.name
                        }), e.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: [typeof w == "number" && `${w} classes • `, x && typeof w != "number" && "Counting classes… • ", (t.size / (1024 * 1024)).toFixed(2), " MB • ", I(t.size), " expected"]
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: c ? e.jsxs("div", {
                        className: "flex flex-col items-end space-y-1",
                        children: [e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [e.jsx("div", {
                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"
                            }), e.jsxs("span", {
                                className: "text-sm text-blue-600",
                                children: [P(r) || "Processing", "...", typeof n == "number" ? ` ${n}%` : ""]
                            })]
                        }), typeof n == "number" && e.jsx("div", {
                            className: "w-24 bg-gray-200 rounded-full h-1.5",
                            children: e.jsx("div", {
                                className: "bg-blue-600 h-1.5 rounded-full transition-all duration-300",
                                style: {
                                    width: `${Math.min(100, Math.max(0, n))}%`
                                }
                            })
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(F, {
                            variant: "outline",
                            size: "sm",
                            onClick: k,
                            className: "border-gray-300 text-gray-700 hover:bg-gray-50",
                            children: "Change File"
                        }), l && e.jsxs(F, {
                            size: "sm",
                            onClick: R,
                            disabled: !!u,
                            className: `${u ? "bg-gray-400 cursor-not-allowed text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                            children: [e.jsx(W, {
                                size: 16,
                                className: "mr-2"
                            }), "Extract JAR"]
                        })]
                    })
                })]
            })
        }) : e.jsx("div", {
            className: `
            relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer
            ${o ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-25"}
          `,
            onDragEnter: L,
            onDragLeave: N,
            onDragOver: M,
            onDrop: g,
            onClick: k,
            children: e.jsxs("div", {
                className: "flex flex-col items-center space-y-4",
                children: [e.jsx("div", {
                    className: `
              rounded-full p-4 transition-colors
              ${o ? "bg-blue-100" : "bg-gray-100"}
            `,
                    children: e.jsx(Ie, {
                        size: 32,
                        className: o ? "text-blue-600" : "text-gray-400"
                    })
                }), e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "Drop your .jar file here"
                    }), e.jsx("p", {
                        className: "text-gray-500",
                        children: "or click to browse and select a file"
                    })]
                }), e.jsxs(F, {
                    variant: "outline",
                    className: "mt-4",
                    children: [e.jsx(W, {
                        size: 16,
                        className: "mr-2"
                    }), "Select JAR File"]
                }), e.jsxs("div", {
                    className: "text-xs text-gray-400 space-y-1",
                    children: [e.jsx("p", {
                        children: "Supported: .jar files"
                    }), e.jsx("p", {
                        children: "Extract and decompile all classes"
                    }), e.jsx("p", {
                        children: "Processing time varies depending on JAR size"
                    })]
                })]
            })
        }), u && e.jsx("div", {
            className: `mt-4 rounded-lg p-4 border ${u.includes("limit") ? "bg-purple-50 border-purple-200" : "bg-red-50 border-red-200"}`,
            children: e.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [e.jsx(ie, {
                    className: `flex-shrink-0 ${u.includes("limit") ? "text-purple-500" : "text-red-500"}`,
                    size: 20
                }), e.jsxs("div", {
                    className: "flex-1",
                    children: [e.jsx("p", {
                        className: `text-sm ${u.includes("limit") ? "text-purple-700" : "text-red-700"}`,
                        children: u
                    }), u.includes("limit") && e.jsx("button", {
                        onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank"),
                        className: "mt-2 text-purple-600 hover:text-purple-800 text-sm font-medium underline",
                        children: "upgrade to Pro →"
                    })]
                })]
            })
        }), a && e.jsx("div", {
            className: `mt-4 rounded-lg p-4 border ${a.includes("exceeds the") && a.includes("limit") || a.includes("contains") && a.includes("classes, exceeding") ? "bg-purple-50 border-purple-200" : "bg-red-50 border-red-200"}`,
            children: e.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [e.jsx(ie, {
                    className: `flex-shrink-0 ${a.includes("exceeds the") && a.includes("limit") || a.includes("contains") && a.includes("classes, exceeding") ? "text-purple-500" : "text-red-500"}`,
                    size: 20
                }), e.jsxs("div", {
                    className: "flex-1",
                    children: [e.jsx("p", {
                        className: `text-sm ${a.includes("exceeds the") && a.includes("limit") || a.includes("contains") && a.includes("classes, exceeding") ? "text-purple-700" : "text-red-700"}`,
                        children: a
                    }), (a.includes("exceeds the") && a.includes("limit") || a.includes("contains") && a.includes("classes, exceeding")) && e.jsx("button", {
                        onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank"),
                        className: "mt-2 text-purple-600 hover:text-purple-800 text-sm font-medium underline",
                        children: "upgrade to Pro →"
                    })]
                })]
            })
        }), !t && e.jsxs("div", {
            className: "mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200",
            children: [e.jsx("h4", {
                className: "font-medium text-blue-900 mb-2",
                children: "How to use:"
            }), e.jsxs("ol", {
                className: "list-decimal list-inside space-y-1 text-sm text-blue-800",
                children: [e.jsx("li", {
                    children: "Upload a Java .jar file using the upload area above"
                }), e.jsx("li", {
                    children: 'Click "Extract JAR" to start the batch decompilation process'
                }), e.jsx("li", {
                    children: "Wait for all .class files to be decompiled"
                }), e.jsx("li", {
                    children: "Download the resulting .zip file containing organized source code"
                })]
            }), e.jsxs("p", {
                className: "text-blue-700 text-sm mt-3",
                children: [e.jsx("strong", {
                    children: "Note:"
                }), " This tool extracts and decompiles all .class files found in the JAR archive. Processing time depends on JAR size and complexity. The output preserves the original package structure."]
            })]
        })]
    })
}
  , ws = ({result: s, onReset: c}) => {
    const [t,l] = i.useState(!1)
      , n = q()
      , r = async () => {
        try {
            l(!0);
            const p = await fetch(s.downloadUrl);
            if (!p.ok)
                throw new Error("Download failed");
            const o = await p.blob();
            ve.saveAs(o, s.filename),
            n == null || n.capture("jar_decompile_download", {
                jarFileName: s.jarFileName,
                outputFileName: s.filename,
                processedClasses: s.processedClasses,
                originalSize: s.originalSize,
                timestamp: new Date().toISOString()
            })
        } catch (p) {
            console.error("Download failed:", p)
        } finally {
            l(!1)
        }
    }
      , a = p => {
        if (p === 0)
            return "0 B";
        const o = 1024
          , m = ["B", "KB", "MB"]
          , u = Math.floor(Math.log(p) / Math.log(o));
        return parseFloat((p / Math.pow(o, u)).toFixed(1)) + " " + m[u]
    }
      , d = p => p < 1e3 ? `${p}ms` : `${(p / 1e3).toFixed(1)}s`;
    return console.log("JarDecompileResult props:", s),
    e.jsx("div", {
        className: "bg-white rounded-lg shadow-lg overflow-hidden",
        children: e.jsxs("div", {
            className: "px-6 py-6 text-center",
            children: [e.jsxs("div", {
                className: "mb-6",
                children: [e.jsx("div", {
                    className: "bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center",
                    children: e.jsx(Z, {
                        size: 32,
                        className: "text-green-600"
                    })
                }), e.jsx("h3", {
                    className: "text-xl font-bold text-gray-800 mb-2",
                    children: "JAR Decompilation Successful"
                }), e.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children: s.filename
                }), e.jsxs("div", {
                    className: "flex justify-center space-x-6 text-sm text-gray-500 mb-6",
                    children: [s.outputSize > 0 && e.jsxs("span", {
                        children: ["ZIP: ", a(s.outputSize)]
                    }), e.jsxs("span", {
                        children: ["Time: ", d(s.processingTime)]
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex justify-center space-x-4",
                children: [e.jsx(F, {
                    onClick: r,
                    disabled: t,
                    size: "lg",
                    className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3",
                    children: t ? e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        }), "Downloading..."]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(X, {
                            size: 18,
                            className: "mr-2"
                        }), "Download Source ZIP", s.outputSize > 0 ? ` (${a(s.outputSize)})` : ""]
                    })
                }), e.jsx(F, {
                    onClick: c,
                    size: "lg",
                    variant: "outline",
                    className: "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3",
                    children: "Decompile Another File"
                })]
            })]
        })
    })
}
  , js = () => {
    const [s,c] = i.useState(!1)
      , [t,l] = i.useState(null)
      , [n,r] = i.useState(null)
      , [a,d] = i.useState(null)
      , [p,o] = i.useState(null)
      , [m,u] = i.useState(null)
      , [f,w] = i.useState(null)
      , v = q()
      , {isProUser: x} = H()
      , [A] = i.useState( () => le());
    i.useEffect( () => {
        const T = window.location.hash;
        if (T) {
            const j = document.getElementById(T.substring(1));
            j && setTimeout( () => {
                j.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            , 100)
        }
    }
    , []);
    const y = async T => {
        u(null),
        o(null),
        w(T)
    }
      , E = async () => {
        var z;
        if (!f)
            return;
        c(!0),
        u(null);
        let T = null
          , j = "other";
        try {
            const L = new FormData;
            L.append("jarFile", f);
            const N = await fetch(Y("/api/v1/jar-async/submit"), {
                method: "POST",
                body: L
            });
            if (T = N.status,
            !N.ok) {
                let h = `Job submission failed: ${N.status}`;
                try {
                    h = (await N.json()).error || h
                } catch {}
                throw j = "submit",
                new Error(h)
            }
            const M = await N.json();
            if (!M.success || !((z = M.data) != null && z.jobId))
                throw new Error(M.error || "Invalid submit response");
            const g = M.data.jobId;
            l(g);
            const k = Date.now()
              , R = 10 * 60 * 1e3
              , I = 2e3;
            for (; Date.now() - k < R; ) {
                const h = await fetch(Y(`/api/v1/jar-async/job/${g}/status`));
                if (T = h.status,
                !h.ok)
                    throw new Error(`Status check failed: ${h.status}`);
                const C = await h.json();
                if (C.success && C.data) {
                    const b = C.data;
                    if (typeof b.progress == "number" && r(b.progress),
                    (b.stage || b.status) && d(b.stage || b.status),
                    b.status === "completed") {
                        console.log("Job completion data:", b);
                        const S = Date.now() - k
                          , D = {
                            downloadUrl: Y(`/api/v1/jar-async/job/${g}/download`),
                            filename: `${f.name.replace(/\.jar$/i, "")}-src.zip`,
                            originalSize: f.size,
                            processedClasses: b.classCount || b.processedClasses || 0,
                            processingTime: S,
                            jarFileName: f.name,
                            outputSize: b.outputSize || b.zipSize || 0,
                            totalTimeMs: b.totalTimeMs,
                            processingTimeMs: b.processingTimeMs,
                            classCount: b.classCount
                        };
                        console.log("Setting decompileResult with:", D),
                        o(D),
                        v == null || v.capture("jar_decompile_success", {
                            jarFileName: f.name,
                            fileSize: f.size,
                            processedClasses: b.classCount || b.processedClasses || 0,
                            processingTime: S,
                            mode: "async",
                            timestamp: new Date().toISOString()
                        }),
                        v == null || v.capture("jar_decompiler_finished", {
                            jar_file_name: f.name,
                            file_size_bytes: f.size,
                            processed_classes: b.classCount || b.processedClasses || 0,
                            output_size_bytes: b.outputSize || b.zipSize || 0,
                            total_time_ms: b.totalTimeMs ?? S,
                            job_id: g,
                            status: "completed",
                            mode: "async",
                            timestamp: new Date().toISOString()
                        });
                        return
                    }
                    if (b.status === "failed")
                        throw j = "status",
                        new Error(b.error || "Job failed")
                }
                await new Promise(b => setTimeout(b, I))
            }
            throw j = "timeout",
            new Error("Job timeout - took too long to complete")
        } catch (L) {
            const N = L instanceof Error ? L.message : String(L);
            console.error("JAR decompilation failed:", N),
            N.includes("timeout") || N.includes("service is temporarily unavailable") || N.includes("Invalid JAR file") || N.includes("Something went wrong") || N.includes("Job timeout") || N.includes("failed") || N.includes("NetworkError") || N.includes("Failed to fetch") ? u(N) : N.includes("too large for processing") ? u(x ? "External processing service rejected the file. Please contact support at igor@igorstechnoclub.com" : N) : N.includes("upgrade to Pro") ? u(N) : u("Something went wrong. Please try again.");
            const M = /ECONN|ENOTFOUND|ETIMEDOUT|NetworkError|Failed to fetch/i.test(N);
            v == null || v.capture("jar_decompile_failed", {
                jar_name: f.name,
                jar_size_bytes: f.size,
                jar_size_mb: Math.round(f.size / (1024 * 1024)),
                class_count: void 0,
                error_message: N,
                job_id: t,
                stage: a,
                progress: n,
                api_status: T ?? void 0,
                failure_phase: j,
                network_error: M,
                timestamp: new Date().toISOString()
            }),
            v == null || v.capture("jar_decompiler_finished", {
                status: "failed",
                jar_file_name: f.name,
                file_size_bytes: f.size,
                job_id: t,
                stage: a,
                progress: n,
                api_status: T ?? void 0,
                failure_phase: j,
                error_message: N,
                network_error: M,
                timestamp: new Date().toISOString()
            })
        } finally {
            c(!1)
        }
    }
      , P = () => {
        w(null),
        o(null),
        u(null),
        c(!1),
        l(null),
        r(null),
        d(null)
    }
    ;
    return e.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [e.jsxs(Q, {
            defer: !1,
            children: [e.jsx("meta", {
                property: "og:title",
                content: "JAR Decompiler Online | Batch Decompile Java Archives"
            }), e.jsx("meta", {
                property: "og:description",
                content: "Decompile entire JAR files online. Extract and decompile all .class files from Java archives and download as organized source code."
            }), e.jsx("meta", {
                property: "og:type",
                content: "website"
            }), e.jsx("meta", {
                property: "og:image",
                content: "https://jar.tools/images/jar-decompiler-og.png"
            }), e.jsx("meta", {
                property: "og:site_name",
                content: "JAR Tools"
            }), e.jsx("meta", {
                property: "og:locale",
                content: "en_US"
            }), e.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }), e.jsx("meta", {
                name: "twitter:site",
                content: "@jar_tools"
            }), e.jsx("meta", {
                name: "twitter:creator",
                content: "@jar_tools"
            }), e.jsx("meta", {
                name: "twitter:title",
                content: "JAR Decompiler Online | Batch Decompile Java Archives"
            }), e.jsx("meta", {
                name: "twitter:description",
                content: "Decompile entire JAR files online. Extract and decompile all .class files from Java archives and download as organized source code."
            }), e.jsx("meta", {
                name: "twitter:image",
                content: "https://jar.tools/images/jar-decompiler-og.png"
            })]
        }), e.jsx(je, {
            type: "jar-decompiler"
        }), e.jsx("div", {
            className: "container mx-auto px-4 pt-6 sm:pt-8",
            children: e.jsxs("div", {
                className: "flex flex-col items-center text-center",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-4 mb-2",
                    children: [e.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-extrabold text-gray-900 inline-block bg-gradient-to-r from-green-500 to-teal-600 text-transparent bg-clip-text",
                        children: "JAR Decompiler Online"
                    }), !x && e.jsx(Nt, {
                        className: "flex-shrink-0"
                    })]
                }), e.jsxs("p", {
                    className: "text-sm text-gray-600 mb-3 max-w-2xl",
                    children: ["Upload a JAR file and decompile all .class files within it. Extract and decompile entire Java archives into organized source code ready for your IDE.", !x && e.jsx("span", {
                        className: "block mt-2 text-yellow-600 font-medium",
                        children: "🔒 Activate Pro for unlimited file sizes and class counts"
                    })]
                }), e.jsx("div", {
                    className: "w-16 h-1 bg-green-600 rounded-full"
                })]
            })
        }), e.jsx("main", {
            className: "container mx-auto px-4 py-8",
            children: e.jsx("div", {
                className: "max-w-4xl mx-auto",
                children: p ? e.jsx(ws, {
                    result: p,
                    onReset: P
                }) : e.jsx(Ge, {
                    className: "w-full",
                    children: e.jsxs(Ze, {
                        className: "p-8",
                        children: [e.jsx("div", {
                            id: "upload",
                            className: "mb-8 scroll-mt-20",
                            children: e.jsx(vs, {
                                onFileSelected: y,
                                isProcessing: s,
                                selectedFile: f,
                                onExtractJar: E,
                                progress: n,
                                stage: a,
                                error: m,
                                clearValidationError: () => u(null)
                            })
                        }), !x && e.jsx("div", {
                            className: "mb-8",
                            children: e.jsx(ce, {
                                adSlot: "1234567890",
                                adFormat: "auto",
                                campaign: A,
                                context: {
                                    viewer: "jar-decompiler",
                                    filePath: "",
                                    fileType: "jar",
                                    jarName: "",
                                    jarInstanceId: ""
                                },
                                variant: "small",
                                isMinecraftMod: null,
                                isMainPageAd: !0,
                                className: ""
                            })
                        })]
                    })
                })
            })
        }), e.jsx(ee, {})]
    })
}
  , Ns = ({className: s=""}) => {
    const c = K()
      , t = (n, r) => {
        if (r.button === 1 || r.ctrlKey || r.metaKey) {
            const a = n === "/#upload" ? "/" : n.split("#")[0];
            window.open(a, "_blank");
            return
        }
        if (n === "/#upload")
            c("/", {
                state: {
                    headerPulse: !0
                }
            }),
            setTimeout( () => {
                const a = document.getElementById("upload");
                a && a.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            , 100);
        else {
            const [a,d] = n.split("#");
            c(a, {
                state: {
                    headerPulse: !0
                }
            }),
            setTimeout( () => {
                if (d) {
                    const p = document.getElementById(d);
                    p && p.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
            }
            , 150)
        }
    }
      , l = [{
        id: "jar-viewer",
        title: "JAR Viewer",
        description: "Browse and edit JAR archives interactively. View file contents, modify resources, and decompile classes on-demand.",
        features: ["✓ Browse structure", "✓ Edit files", "✓ Interactive viewer"],
        link: "/#upload",
        icon: Se,
        gradient: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        iconBg: "bg-blue-600",
        buttonBg: "bg-blue-600 hover:bg-blue-700",
        featureBg: "bg-blue-100",
        featureText: "text-blue-700"
    }, {
        id: "class-decompiler",
        title: "Class Decompiler",
        description: "Convert individual .class files to readable Java source code with syntax highlighting and sharing features.",
        features: ["✓ Instant results", "✓ Syntax highlighting", "✓ Share decompiled code"],
        link: "/class-decompiler#upload",
        icon: G,
        gradient: "from-purple-50 to-pink-50",
        border: "border-purple-200",
        iconBg: "bg-purple-600",
        buttonBg: "bg-purple-600 hover:bg-purple-700",
        featureBg: "bg-purple-100",
        featureText: "text-purple-700"
    }, {
        id: "jar-decompiler",
        title: "JAR Decompiler",
        description: "JAR Decompiler Online allows one-click JAR decompilation with batch class processing, preserves package structure and resources, and outputs a clean, package-organized source ZIP.",
        features: ["✓ Decompiles all Java classes", "✓ Preserves other resources", "✓ Generates Source code"],
        link: "/jar-decompiler#upload",
        icon: W,
        gradient: "from-green-50 to-emerald-50",
        border: "border-green-200",
        iconBg: "bg-green-600",
        buttonBg: "bg-green-600 hover:bg-green-700",
        featureBg: "bg-green-100",
        featureText: "text-green-700",
        isNew: !0
    }];
    return e.jsxs("div", {
        id: "all-tools-section",
        className: `scroll-mt-20 ${s}`,
        children: [e.jsx("h3", {
            className: "text-xl font-bold text-gray-800 mb-6 text-center",
            children: "All Tools"
        }), e.jsx("div", {
            className: "grid md:grid-cols-3 gap-6 items-stretch",
            children: l.map(n => {
                const r = n.icon;
                return e.jsx("div", {
                    className: `bg-gradient-to-r ${n.gradient} p-6 rounded-xl border ${n.border} shadow-sm h-full flex flex-col`,
                    children: e.jsxs("div", {
                        className: "flex flex-col items-center text-center gap-4 flex-1",
                        children: [e.jsx("div", {
                            className: `w-16 h-16 ${n.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg`,
                            children: e.jsx(r, {
                                className: "w-8 h-8"
                            })
                        }), e.jsxs("div", {
                            children: [e.jsxs("h4", {
                                className: "text-xl font-bold text-gray-900 mb-2",
                                children: [n.title, "isNew"in n && n.isNew && e.jsx("span", {
                                    className: "ml-2 align-middle text-[10px] font-bold uppercase tracking-wide bg-amber-500 text-white px-2 py-0.5 rounded-full",
                                    children: "New"
                                })]
                            }), e.jsx("p", {
                                className: "text-gray-700 mb-4",
                                children: n.description
                            }), e.jsx("div", {
                                className: `flex flex-wrap gap-2 text-sm ${n.featureText} justify-center mb-4`,
                                children: n.features.map( (a, d) => e.jsx("span", {
                                    className: `${n.featureBg} px-3 py-1 rounded-full`,
                                    children: a
                                }, d))
                            })]
                        }), e.jsxs("button", {
                            onClick: a => t(n.link, a),
                            onMouseDown: a => {
                                a.button === 1 && (a.preventDefault(),
                                t(n.link, a))
                            }
                            ,
                            className: `${n.buttonBg} text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow hover:shadow-md inline-flex items-center gap-2 mt-auto`,
                            children: [e.jsx(r, {
                                className: "w-4 h-4"
                            }), "Try ", n.title]
                        })]
                    })
                }, n.id)
            }
            )
        })]
    })
}
  , ye = {
    "/": {
        title: "JAR Tools | Online JAR File Editor & Viewer",
        description: "Easily view, edit, and decompile .jar files online in your browser",
        canonical: "https://jar.tools/",
        ogType: "website",
        ogImage: "https://jar.tools/seo/jartools.png",
        ogSiteName: "JAR Tools",
        ogLocale: "en_US",
        twitterCard: "summary_large_image",
        twitterSite: "@jar_viewer",
        twitterCreator: "@jar_viewer",
        twitterImage: "https://jar.tools/seo/jartools.png"
    },
    "/class-decompiler": {
        title: "Jar Tools | Java Class Decompiler Online",
        description: "Decompile Java class files online and view readable source code",
        canonical: "https://jar.tools/class-decompiler",
        ogType: "website",
        ogImage: "https://jar.tools/images/class-decompiler-og.png",
        ogSiteName: "JAR Tools",
        ogLocale: "en_US",
        twitterCard: "summary_large_image",
        twitterSite: "@jar_tools",
        twitterCreator: "@jar_tools",
        twitterImage: "https://jar.tools/images/class-decompiler-og.png"
    },
    "/jar-decompiler": {
        title: "Jar Tools | Jar Decompiler Online",
        description: "Decompile entire JAR file and download as a source ZIP",
        canonical: "https://jar.tools/jar-decompiler",
        ogType: "website",
        ogImage: "https://jar.tools/images/jar-decompiler-og.png",
        ogSiteName: "JAR Tools",
        ogLocale: "en_US",
        twitterCard: "summary_large_image",
        twitterSite: "@jar_tools",
        twitterCreator: "@jar_tools",
        twitterImage: "https://jar.tools/images/jar-decompiler-og.png"
    },
    "/pro": {
        title: "JAR Tools Pro | Advanced JAR Editing Features",
        description: "Unlock advanced JAR editing capabilities with JAR Tools Pro. Unlimited decompilation, advanced JSON editing, properties validation, and ad-free experience.",
        canonical: "https://jar.tools/pro",
        ogType: "website",
        ogImage: "https://jar.tools/seo/jartools.png",
        ogSiteName: "JAR Tools",
        ogLocale: "en_US",
        twitterCard: "summary_large_image",
        twitterSite: "@jar_viewer",
        twitterCreator: "@jar_viewer",
        twitterImage: "https://jar.tools/seo/jartools.png"
    }
}
  , be = {
    title: "JAR Tools | Online JAR File Editor & Viewer",
    description: "Easily view, edit, and decompile .jar files online in your browser",
    ogType: "website",
    ogImage: "https://jar.tools/seo/jartools.png",
    ogSiteName: "JAR Tools",
    ogLocale: "en_US",
    twitterCard: "summary_large_image",
    twitterSite: "@jar_viewer",
    twitterCreator: "@jar_viewer",
    twitterImage: "https://jar.tools/seo/jartools.png"
};
let ae;
try {
    const {data: s} = oe(me);
    ae = {
        title: s.title || "Knowledge Base | Jar Tools",
        description: s.description || "Comprehensive guides and tutorials for JAR file editing, decompilation, and management.",
        canonical: "https://jar.tools/kb"
    }
} catch (s) {
    console.error("Error parsing KB index markdown:", s),
    ae = {
        title: "Knowledge Base | Jar Tools",
        description: "Comprehensive guides and tutorials for JAR file editing, decompilation, and management.",
        canonical: "https://jar.tools/kb"
    }
}
const Ke = () => {
    const {pathname: s} = re()
      , c = s.endsWith("/") && s !== "/" ? s.slice(0, -1) : s;
    if (s.startsWith("/kb/") && s !== "/kb")
        return null;
    const t = s === "/kb" || c === "/kb" ? {
        ...be,
        ...ae
    } : ye[s] || ye[c] || be
      , l = t.canonical || (typeof window < "u" ? window.location.origin + s : void 0);
    return e.jsxs(Q, {
        defer: !1,
        children: [e.jsx("title", {
            children: t.title
        }), e.jsx("meta", {
            name: "description",
            content: t.description
        }), t.canonical ? e.jsx("link", {
            rel: "canonical",
            href: t.canonical
        }) : null, e.jsx("meta", {
            property: "og:type",
            content: t.ogType || "website"
        }), l ? e.jsx("meta", {
            property: "og:url",
            content: l
        }) : null, e.jsx("meta", {
            property: "og:title",
            content: t.title
        }), e.jsx("meta", {
            property: "og:description",
            content: t.description
        }), t.ogImage ? e.jsx("meta", {
            property: "og:image",
            content: t.ogImage
        }) : null, t.ogSiteName ? e.jsx("meta", {
            property: "og:site_name",
            content: t.ogSiteName
        }) : null, t.ogLocale ? e.jsx("meta", {
            property: "og:locale",
            content: t.ogLocale
        }) : null, e.jsx("meta", {
            name: "twitter:card",
            content: t.twitterCard || "summary_large_image"
        }), e.jsx("meta", {
            name: "twitter:title",
            content: t.title
        }), e.jsx("meta", {
            name: "twitter:description",
            content: t.description
        }), t.twitterImage ? e.jsx("meta", {
            name: "twitter:image",
            content: t.twitterImage
        }) : null, t.twitterSite ? e.jsx("meta", {
            name: "twitter:site",
            content: t.twitterSite
        }) : null, t.twitterCreator ? e.jsx("meta", {
            name: "twitter:creator",
            content: t.twitterCreator
        }) : null]
    })
}
  , As = () => e.jsxs(e.Fragment, {
    children: [e.jsx(Ke, {
        title: "All Tools - JAR Viewer, Class Decompiler & JAR Decompiler Online",
        description: "Comprehensive suite of Java development tools: JAR Viewer for browsing and editing JAR files, Class Decompiler for individual .class files, and JAR Decompiler for batch processing entire JARs.",
        keywords: "JAR tools, class decompiler, JAR decompiler, JAR viewer, Java tools, bytecode, decompilation",
        canonicalPath: "/all-tools"
    }), e.jsx("div", {
        className: "min-h-screen bg-white",
        children: e.jsxs("div", {
            className: "max-w-6xl mx-auto px-4 py-12",
            children: [e.jsxs("div", {
                className: "text-center mb-12",
                children: [e.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "All Java Development Tools"
                }), e.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Complete suite of online tools for working with JAR files and Java bytecode. No downloads required - all tools work directly in your browser."
                })]
            }), e.jsx(Ns, {
                className: "max-w-none"
            })]
        })
    }), e.jsx(ee, {})]
})
  , Js = i.lazy( () => ht( () => import("./jar-viewer-app-B4peIdHc.js").then(s => s.n), __vite__mapDeps([0, 1, 2, 3, 4])))
  , ks = new nt
  , Ss = () => e.jsx(it, {
    client: ks,
    children: e.jsx(At, {
        children: e.jsxs(at, {
            children: [e.jsx(Ke, {}), e.jsxs(rt, {
                children: [e.jsx(B, {
                    path: "/",
                    element: e.jsx(is, {})
                }), e.jsx(B, {
                    path: "/jar-viewer",
                    element: e.jsx(i.Suspense, {
                        fallback: e.jsx("div", {
                            className: "min-h-screen flex items-center justify-center",
                            children: e.jsxs("div", {
                                className: "text-center",
                                children: [e.jsx("div", {
                                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-jar-600 mx-auto mb-4"
                                }), e.jsx("p", {
                                    className: "text-gray-600",
                                    children: "Loading JAR Viewer..."
                                })]
                            })
                        }),
                        children: e.jsx(Js, {})
                    })
                }), e.jsx(B, {
                    path: "/pro",
                    element: e.jsx(hs, {})
                }), e.jsx(B, {
                    path: "/class-decompiler",
                    element: e.jsx(fs, {})
                }), e.jsx(B, {
                    path: "/jar-decompiler",
                    element: e.jsx(js, {})
                }), e.jsx(B, {
                    path: "/all-tools",
                    element: e.jsx(As, {})
                }), e.jsx(B, {
                    path: "/kb",
                    element: e.jsx(os, {})
                }), e.jsx(B, {
                    path: "/kb/:slug",
                    element: e.jsx(ds, {})
                }), " ", e.jsx(B, {
                    path: "*",
                    element: e.jsx(as, {})
                })]
            })]
        })
    })
})
  , Rs = "phc_xI2gcM3AbY4fbWurNVc3ZFJBcta6mwFg28ekxNcu4Wa"
  , Cs = "https://eu.i.posthog.com";
ot.createRoot(document.getElementById("root")).render(e.jsx(lt.StrictMode, {
    children: e.jsx(ct, {
        children: e.jsx(Qt, {
            apiKey: Rs,
            options: {
                api_host: Cs,
                ui_host: "https://eu.posthog.com",
                debug: !1,
                capture_pageview: !0,
                capture_pageleave: !0,
                persistence: "localStorage+cookie",
                autocapture: !0,
                disable_session_recording: !1,
                session_recording: {
                    maskAllInputs: !0,
                    maskAllText: !1
                },
                person_profiles: "identified_only",
                loaded: s => {}
            },
            children: e.jsx(Jt, {
                children: e.jsx(kt, {
                    children: e.jsx(Ss, {})
                })
            })
        })
    })
}));
