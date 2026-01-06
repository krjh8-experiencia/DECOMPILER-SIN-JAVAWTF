var ir = Object.defineProperty;
var or = (s, t, r) => t in s ? ir(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r;
var Ge = (s, t, r) => or(s, typeof t != "symbol" ? t + "" : t, r);
import {t as lr, c as cr, r as i, j as e, a as Ms, u as dr, L as Es, R as Te, b as it, d as ot, e as ur, E as Ve, F as Me, S as mr, D as es, f as fr, g as hr, J as as, l as ie, h as lt} from "./vendor-libs-GpX5E6_3.js";
import {C as ct, P as xr, R as pr, T as gr, S as br, O as dt, a as yr, b as ut, c as vr, X as Ue, d as mt, D as ft, e as jr, f as wr, U as As, g as He, h as be, i as Oe, j as Nr, E as Us, k as ht, Z as us, l as qe, m as xt, n as pt, A as Sr, o as Cr, p as gt, W as kr, q as ms, r as is, s as Er, K as Ar, L as Fs, t as Ir, u as bt, v as Tr, M as Pr, w as yt, x as vt, y as jt, z as _r, F as Rr, B as Is, G as Dr, H as Lr, I as $s, J as wt, N as Or, Q as Mr, V as Ur, Y as Fr, _ as Nt, $ as Se, a0 as $r, a1 as Ts, a2 as St, a3 as zr, a4 as Ct, a5 as kt, a6 as Jr, a7 as Et, a8 as At, a9 as It, aa as Tt, ab as Pt, ac as Vr, ad as _t, ae as Rt, af as Br, ag as Wr, ah as Hr, ai as Dt, aj as Kr, ak as Zr, al as Gr, am as Yr, an as Xr, ao as qr, ap as Lt, aq as Ot, ar as Qr, as as en, at as Mt, au as sn, av as Ps, aw as tn, ax as rn, ay as nn, az as an, aA as Ut} from "./vendor-ui-BLpUFD0p.js";
import {u as gs, i as vs} from "./vendor-analytics-B0BP_D2J.js";
import {S as bs, j as on, a as ln, p as cn, v as dn} from "./vendor-syntax-BwoFerex.js";
function V(...s) {
    return lr(cr(s))
}
const zs = xr
  , fs = pr
  , hs = gr
  , Qe = i.forwardRef( ({className: s, sideOffset: t=4, ...r}, n) => e.jsx(ct, {
    ref: n,
    sideOffset: t,
    className: V("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
    ...r
}));
Qe.displayName = ct.displayName;
const un = Ms("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , _ = i.forwardRef( ({className: s, variant: t, size: r, asChild: n=!1, ...a}, o) => {
    const d = n ? br : "button";
    return e.jsx(d, {
        className: V(un({
            variant: t,
            size: r,
            className: s
        })),
        ref: o,
        ...a
    })
}
);
_.displayName = "Button";
const we = jr
  , mn = wr
  , fn = yr
  , Ft = i.forwardRef( ({className: s, ...t}, r) => e.jsx(dt, {
    ref: r,
    className: V("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", s),
    ...t
}));
Ft.displayName = dt.displayName;
const ye = i.forwardRef( ({className: s, children: t, ...r}, n) => e.jsxs(fn, {
    children: [e.jsx(Ft, {}), e.jsxs(ut, {
        ref: n,
        className: V("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", s),
        ...r,
        children: [t, e.jsxs(vr, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [e.jsx(Ue, {
                className: "h-4 w-4"
            }), e.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
ye.displayName = ut.displayName;
const ve = ({className: s, ...t}) => e.jsx("div", {
    className: V("flex flex-col space-y-1.5 text-center sm:text-left", s),
    ...t
});
ve.displayName = "DialogHeader";
const Ce = ({className: s, ...t}) => e.jsx("div", {
    className: V("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", s),
    ...t
});
Ce.displayName = "DialogFooter";
const je = i.forwardRef( ({className: s, ...t}, r) => e.jsx(mt, {
    ref: r,
    className: V("text-lg font-semibold leading-none tracking-tight", s),
    ...t
}));
je.displayName = mt.displayName;
const Ne = i.forwardRef( ({className: s, ...t}, r) => e.jsx(ft, {
    ref: r,
    className: V("text-sm text-muted-foreground", s),
    ...t
}));
Ne.displayName = ft.displayName;
const hn = ({isOpen: s, onClose: t, remainingUploads: r, dailyLimit: n, onUpgradeToPro: a, timeUntilReset: o}) => e.jsx(we, {
    open: s,
    onOpenChange: t,
    children: e.jsxs(ye, {
        className: "sm:max-w-md",
        children: [e.jsxs(ve, {
            children: [e.jsxs(je, {
                className: "flex items-center gap-2",
                children: [e.jsx(As, {
                    className: "h-5 w-5 text-blue-500"
                }), e.jsx("span", {
                    children: "Daily Upload Limit Reached"
                })]
            }), e.jsxs(Ne, {
                children: ["You've used your ", n, " free JAR upload for today."]
            })]
        }), e.jsxs("div", {
            className: "flex flex-col space-y-4 py-4",
            children: [e.jsxs("div", {
                className: "bg-purple-50 p-4 rounded-md",
                children: [e.jsx("h4", {
                    className: "font-medium text-purple-800 mb-2",
                    children: "Upgrade to Pro for unlimited uploads"
                }), e.jsx("p", {
                    className: "text-sm text-purple-600",
                    children: "Pro gives you unlimited JAR uploads, decompilation, and many other premium features."
                })]
            }), e.jsxs("div", {
                className: "bg-blue-50 border border-blue-100 rounded-md p-3 flex items-center",
                children: [e.jsx(He, {
                    className: "h-4 w-4 text-blue-500 mr-2 flex-shrink-0"
                }), e.jsxs("p", {
                    className: "text-sm text-blue-700",
                    children: ["Upload limit resets in: ", e.jsxs("span", {
                        className: "font-medium",
                        children: [o.hours, "h ", o.minutes, "m ", o.seconds, "s"]
                    })]
                })]
            }), e.jsx("div", {
                className: "bg-amber-50 p-3 rounded-md border border-amber-200",
                children: e.jsxs("p", {
                    className: "text-amber-800 text-xs",
                    children: ["💎 ", e.jsx("strong", {
                        children: "Pro users"
                    }), " never see this limit and have unlimited JAR uploads."]
                })
            })]
        }), e.jsxs(Ce, {
            className: "sm:justify-between",
            children: [e.jsx(_, {
                variant: "outline",
                onClick: t,
                children: "Maybe Later"
            }), e.jsxs(_, {
                onClick: a,
                className: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
                children: [e.jsx(be, {
                    className: "mr-2 h-4 w-4"
                }), "Upgrade to Pro"]
            })]
        })]
    })
})
  , xs = s => {
    if (typeof window < "u") {
        const {hostname: t} = window.location;
        if (t === "localhost" || t === "127.0.0.1")
            return `http://localhost:3000${s}`
    }
    return s
}
  , $t = i.createContext(void 0)
  , js = "zipzoomer_pro_status"
  , ws = "zipzoomer_license_key"
  , ss = "zipzoomer_license_verified_at"
  , Bs = 24 * 60 * 60 * 1e3
  , xn = 2 * 60 * 60 * 1e3
  , qa = ({children: s}) => {
    const [t,r] = i.useState(!1)
      , [n,a] = i.useState("idle")
      , o = i.useCallback( () => {
        try {
            localStorage.removeItem(js),
            localStorage.removeItem(ws),
            localStorage.removeItem(ss)
        } catch (x) {
            console.error("[ProAuth] Error clearing localStorage:", x)
        }
    }
    , []);
    i.useEffect( () => {
        (async () => {
            try {
                const m = localStorage.getItem(js)
                  , c = localStorage.getItem(ws)
                  , u = localStorage.getItem(ss);
                if (m === "true" && c) {
                    const f = u ? parseInt(u, 10) : 0
                      , h = Date.now()
                      , g = h - f;
                    if (g > Bs) {
                        console.log("[ProAuth] License verification expired, re-verifying with backend..."),
                        a("checking");
                        try {
                            (await (await fetch(xs("/api/v1/verify"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    licenseKey: c
                                })
                            })).json()).success ? (r(!0),
                            a("valid"),
                            localStorage.setItem(ss, h.toString()),
                            console.log("[ProAuth] Re-verified stored license with backend.")) : (o(),
                            a("idle"),
                            console.log("[ProAuth] Stored license is no longer valid, cleared from localStorage."))
                        } catch (v) {
                            console.error("[ProAuth] Error re-verifying stored license:", v),
                            g <= Bs + xn ? (r(!0),
                            a("valid"),
                            console.log("[ProAuth] Network error within grace period, allowing temporary access.")) : (o(),
                            a("idle"),
                            console.log("[ProAuth] Grace period expired, cleared license from localStorage."))
                        }
                    } else
                        r(!0),
                        a("valid"),
                        console.log("[ProAuth] Using recently verified license (verified ", Math.round(g / 36e5), " hours ago).")
                }
            } catch (m) {
                console.error("[ProAuth] Error reading from localStorage:", m)
            }
        }
        )()
    }
    , []);
    const d = i.useCallback(async x => {
        if (!x || x.trim() === "")
            throw a("invalid"),
            new Error("License key cannot be empty.");
        a("checking");
        const m = new Promise(c => setTimeout(c, 1e3));
        try {
            const c = (async () => {
                const f = await (await fetch(xs("/api/v1/verify"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        licenseKey: x
                    })
                })).json();
                if (!f.success)
                    throw new Error(f.error || "Invalid license key");
                const h = Date.now();
                r(!0),
                localStorage.setItem(js, "true"),
                localStorage.setItem(ws, x),
                localStorage.setItem(ss, h.toString()),
                console.log("[ProAuth] Pro status activated and saved to localStorage.")
            }
            )();
            await Promise.all([m, c]),
            a("valid")
        } catch (c) {
            throw console.error("[ProAuth] Error activating license:", c),
            a("invalid"),
            r(!1),
            c
        }
    }
    , [])
      , l = i.useCallback( () => {
        r(!1),
        a("idle"),
        o(),
        console.log("[ProAuth] Pro status removed from localStorage.")
    }
    , [o])
      , p = {
        isProUser: t,
        activationStatus: n,
        activateLicense: d,
        deactivateLicense: l
    };
    return e.jsx($t.Provider, {
        value: p,
        children: s
    })
}
  , ke = () => {
    const s = i.useContext($t);
    if (s === void 0)
        throw new Error("useProAuth must be used within a ProAuthProvider");
    return s
}
  , ze = 1
  , Ws = "zipzoomer_user_id"
  , pn = ["fastjson-1.2.83.jar", "sodium-fabric-0.6.13+mc1.21.6.jar", "junit-4.13.jar"]
  , Hs = s => pn.includes(s.toLowerCase())
  , gn = () => "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
  , Ks = () => {
    let s = localStorage.getItem(Ws);
    return s || (s = gn(),
    localStorage.setItem(Ws, s)),
    s
}
  , Zs = () => new Date().toISOString().split("T")[0]
  , Gs = () => {
    const s = new Date
      , t = new Date;
    t.setHours(24, 0, 0, 0);
    const r = t.getTime() - s.getTime()
      , n = Math.floor(r / (1e3 * 60 * 60))
      , a = Math.floor(r % (1e3 * 60 * 60) / (1e3 * 60))
      , o = Math.floor(r % (1e3 * 60) / 1e3);
    return {
        hours: n,
        minutes: a,
        seconds: o
    }
}
  , zt = () => {
    const {isProUser: s} = ke()
      , [t,r] = i.useState({
        canUpload: !0,
        remainingUploads: ze,
        timeUntilReset: Gs()
    });
    i.useEffect( () => {
        const x = setInterval( () => {
            r(m => ({
                ...m,
                timeUntilReset: Gs()
            }))
        }
        , 1e3);
        return () => clearInterval(x)
    }
    , []);
    const n = i.useCallback( () => {
        const m = `jar_uploads_${Ks()}_${Zs()}`;
        try {
            const c = localStorage.getItem(m);
            if (c)
                return JSON.parse(c)
        } catch (c) {
            console.error("[UploadLimit] Error reading uploads from localStorage:", c)
        }
        return {
            uploads: [],
            count: 0,
            lastUpload: 0
        }
    }
    , [])
      , a = i.useCallback(x => {
        const c = `jar_uploads_${Ks()}_${Zs()}`;
        try {
            localStorage.setItem(c, JSON.stringify(x))
        } catch (u) {
            console.error("[UploadLimit] Error saving uploads to localStorage:", u)
        }
    }
    , [])
      , o = i.useCallback(x => !0, [])
      , d = i.useCallback(x => {
        if (s || x && Hs(x))
            return !1;
        const m = n();
        return Math.max(0, ze - m.count) <= 0 ? x && m.uploads.includes(x.toLowerCase()) ? m.uploads.indexOf(x.toLowerCase()) >= ze : !0 : !1
    }
    , [s, n])
      , l = i.useCallback(x => {
        if (s)
            return;
        if (Hs(x)) {
            console.log("[UploadLimit] Sample file upload (not counted):", x);
            return
        }
        const m = n()
          , c = x.toLowerCase();
        if (m.uploads.includes(c))
            return;
        const u = {
            uploads: [...m.uploads, c],
            count: m.count + 1,
            lastUpload: Date.now()
        };
        a(u);
        const f = Math.max(0, ze - u.count);
        r(h => ({
            ...h,
            canUpload: f > 0,
            remainingUploads: f
        })),
        console.log("[UploadLimit] Upload recorded:", {
            jarName: x,
            totalUploads: u.count,
            remaining: f
        })
    }
    , [s, n, a])
      , p = i.useCallback( () => {
        if (s)
            return -1;
        const x = n();
        return Math.max(0, ze - x.count)
    }
    , [s, n]);
    return i.useEffect( () => {
        const x = p();
        r(m => ({
            ...m,
            canUpload: s || x > 0,
            remainingUploads: x
        }))
    }
    , [p, s]),
    {
        canUpload: o,
        getIsReadOnly: d,
        recordUpload: l,
        remainingUploads: t.remainingUploads,
        timeUntilReset: t.timeUntilReset,
        isProUser: s,
        dailyLimit: ze
    }
}
  , bn = ({onJarSelected: s, showSamples: t=!1}) => {
    const [r,n] = i.useState(!1)
      , [a,o] = i.useState(null)
      , [d,l] = i.useState(!1)
      , p = gs()
      , x = zt()
      , m = i.useCallback(b => {
        o(null);
        const N = x.getIsReadOnly(b.name);
        N && l(!0);
        const S = b.name.toLowerCase()
          , E = [".jar", ".class"];
        if (!E.some(R => S.endsWith(R))) {
            const R = S.endsWith(".class")
              , O = S.endsWith(".zip");
            let C;
            R ? C = "class-file-redirect" : O ? C = "zip-file-redirect" : C = "File must be a JAR or .class file.",
            o(C),
            p == null || p.capture("file_upload_failed", {
                file_name: b.name,
                file_size: b.size,
                file_size_mb: (b.size / (1024 * 1024)).toFixed(2),
                file_type: b.type,
                file_extension: S.substring(S.lastIndexOf(".")),
                error_reason: R ? "class_file_redirect" : O ? "zip_file_redirect" : "unsupported_file_type",
                supported_extensions: E,
                is_class_file: R,
                is_zip_file: O
            }),
            console.error("[File Upload Error]", {
                fileName: b.name,
                fileType: b.type,
                fileSize: b.size,
                supportedExtensions: E,
                isClassFile: R,
                isZipFile: O,
                error: R ? "Class file - redirect to decompiler" : O ? "ZIP file - redirect to ZipZoomer" : "Unsupported file extension"
            });
            return
        }
        const T = 500 * 1024 * 1024;
        if (b.size > T) {
            o("File is too large. Maximum size is 500MB."),
            p == null || p.capture("file_upload_failed", {
                file_name: b.name,
                file_size: b.size,
                file_size_mb: (b.size / (1024 * 1024)).toFixed(2),
                file_type: b.type,
                file_extension: S.substring(S.lastIndexOf(".")),
                error_reason: "file_too_large",
                max_size_mb: "500"
            }),
            console.error("[File Upload Error]", {
                fileName: b.name,
                fileSize: b.size,
                maxSize: T,
                error: "File too large"
            });
            return
        }
        x.recordUpload(b.name),
        p == null || p.capture("file_upload_success", {
            file_name: b.name,
            file_size: b.size,
            file_size_mb: (b.size / (1024 * 1024)).toFixed(2),
            file_type: b.type,
            file_extension: S.substring(S.lastIndexOf(".")),
            remaining_uploads: x.remainingUploads - 1,
            is_pro_user: x.isProUser
        }),
        console.log("[File Upload Success]", {
            fileName: b.name,
            fileType: b.type,
            fileSize: b.size,
            isReadOnly: N
        }),
        s(b, N)
    }
    , [s, p, x])
      , c = i.useCallback( (b, N) => {
        if (N.length > 0) {
            const S = N[0]
              , E = S.file
              , L = E.name.toLowerCase()
              , T = L.endsWith(".class")
              , R = L.endsWith(".zip");
            let O;
            T ? O = "class-file-redirect" : R ? O = "zip-file-redirect" : O = "File must be a JAR or .class file.",
            o(O),
            p == null || p.capture("file_upload_failed", {
                file_name: E.name,
                file_size: E.size,
                file_size_mb: (E.size / (1024 * 1024)).toFixed(2),
                file_type: E.type,
                file_extension: E.name.substring(E.name.lastIndexOf(".")),
                error_reason: "dropzone_rejected",
                rejection_codes: S.errors.map(C => C.code)
            }),
            console.error("[File Drop Error]", {
                fileName: E.name,
                fileType: E.type,
                fileSize: E.size,
                rejectionReasons: S.errors,
                error: "File rejected by dropzone"
            });
            return
        }
        b.length > 0 && m(b[0])
    }
    , [m, p])
      , {getRootProps: u, getInputProps: f} = dr({
        onDrop: c,
        onDragEnter: () => n(!0),
        onDragLeave: () => n(!1),
        accept: {
            "application/java-archive": [".jar"],
            "application/x-java-archive": [".jar"],
            "application/x-java-class": [".class"],
            "application/octet-stream": [".class"]
        },
        multiple: !1,
        noClick: !1
    })
      , h = b => {
        const N = b.target.files;
        N && N.length > 0 && m(N[0])
    }
      , g = async b => {
        try {
            o(null);
            const N = await fetch(`/samples/${b}`);
            if (!N.ok)
                throw new Error(`Failed to load sample file: ${b}`);
            const S = await N.blob()
              , E = new File([S],b,{
                type: "application/java-archive"
            });
            console.log("[Sample File Load Success]", {
                fileName: b,
                fileSize: S.size
            }),
            s(E)
        } catch (N) {
            o("Could not load sample file."),
            console.error("[Sample File Load Error]", {
                fileName: b,
                error: N instanceof Error ? N.message : "Unknown error"
            })
        }
    }
      , v = () => {
        window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
        l(!1)
    }
    ;
    return e.jsx("div", {
        className: "h-full flex flex-col items-center justify-center p-8",
        children: e.jsxs("div", {
            className: "w-full",
            children: [a && e.jsxs("div", {
                className: `border rounded-lg p-4 flex items-start space-x-3 mb-6 ${a === "class-file-redirect" ? "bg-purple-50 border-purple-200" : a === "zip-file-redirect" ? "bg-blue-50 border-blue-200" : "bg-red-50 border-red-200"}`,
                children: [a === "class-file-redirect" ? e.jsx(Oe, {
                    className: "h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5"
                }) : a === "zip-file-redirect" ? e.jsx(As, {
                    className: "h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5"
                }) : e.jsx(Nr, {
                    className: "h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"
                }), e.jsx("div", {
                    className: "flex-1",
                    children: a === "class-file-redirect" ? e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            className: "text-purple-800 text-sm font-medium",
                            children: "Class File Detected"
                        }), e.jsx("p", {
                            className: "text-purple-700 text-sm mt-1",
                            children: "To decompile individual .class files, use our dedicated Class Decompiler."
                        }), e.jsxs(Es, {
                            to: "/class-decompiler",
                            className: "inline-flex items-center mt-2 px-3 py-1.5 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors",
                            children: [e.jsx(Oe, {
                                size: 14,
                                className: "mr-1.5"
                            }), "Go to Class Decompiler"]
                        })]
                    }) : a === "zip-file-redirect" ? e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            className: "text-blue-800 text-sm font-medium",
                            children: "ZIP File Detected"
                        }), e.jsx("p", {
                            className: "text-blue-700 text-sm mt-1",
                            children: "JAR Tools works only with JAR files. You can open ZIP files with ZipZoomer."
                        }), e.jsxs("a", {
                            href: "https://zipzoomer.fly.dev/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center mt-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors",
                            children: [e.jsx(As, {
                                size: 14,
                                className: "mr-1.5"
                            }), "Open ZipZoomer"]
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            className: "text-red-800 text-sm font-medium",
                            children: "Upload Error"
                        }), e.jsx("p", {
                            className: "text-red-700 text-sm mt-1",
                            children: a
                        })]
                    })
                }), e.jsx("button", {
                    onClick: () => o(null),
                    className: `flex-shrink-0 ${a === "class-file-redirect" ? "text-purple-500 hover:text-purple-700" : a === "zip-file-redirect" ? "text-blue-500 hover:text-blue-700" : "text-red-500 hover:text-red-700"}`,
                    title: "Dismiss",
                    children: e.jsx(Ue, {
                        className: "h-4 w-4"
                    })
                })]
            }), e.jsxs("div", {
                ...u(),
                className: `
            border-2 border-dashed rounded-xl p-12 w-full
            transition-all duration-200 cursor-pointer min-h-[200px]
            ${r ? "border-jar-500 bg-jar-50 scale-[1.02]" : "border-gray-300 hover:border-jar-400 hover:bg-gray-50"}
          `,
                "data-testid": "file-drop-zone",
                children: [e.jsx("input", {
                    ...f()
                }), e.jsxs("div", {
                    className: "text-center space-y-4",
                    children: [e.jsx(_, {
                        className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all",
                        children: "Upload JAR File"
                    }), e.jsx("p", {
                        className: "text-gray-600 text-sm mt-4",
                        children: "Drag & drop a JAR file here, or click the button above"
                    })]
                })]
            }), e.jsx("input", {
                type: "file",
                accept: ".jar,.class",
                onChange: h,
                "data-testid": "jar-file-input",
                id: "jar-file-input",
                className: "hidden"
            }), t && e.jsxs("div", {
                className: "mt-8 w-full flex flex-col items-center",
                children: [e.jsx("h3", {
                    className: "text-base font-normal text-gray-600 mb-4 text-center",
                    children: "Try with sample JAR files:"
                }), e.jsxs("div", {
                    className: "flex flex-wrap gap-3 justify-center max-w-2xl",
                    children: [e.jsxs(_, {
                        onClick: () => g("fastjson-1.2.83.jar"),
                        variant: "outline",
                        size: "sm",
                        className: "text-left flex-col h-auto p-3 hover:border-jar-300",
                        "data-testid": "sample-fastjson-1.2.83",
                        children: [e.jsx("div", {
                            className: "font-semibold text-jar-600",
                            children: "fastjson-1.2.83.jar"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "JSON parsing library"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "~600KB"
                        })]
                    }), e.jsxs(_, {
                        onClick: () => g("sodium-fabric-0.6.13+mc1.21.6.jar"),
                        variant: "outline",
                        size: "sm",
                        className: "text-left flex-col h-auto p-3 hover:border-jar-300",
                        "data-testid": "sample-sodium-fabric",
                        children: [e.jsx("div", {
                            className: "font-semibold text-jar-600",
                            children: "sodium-fabric-0.6.13+mc1.21.6.jar"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "⛏️ Popular Minecraft mod"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "~600KB"
                        })]
                    }), e.jsxs(_, {
                        onClick: () => g("junit-4.13.jar"),
                        variant: "outline",
                        size: "sm",
                        className: "text-left flex-col h-auto p-3 hover:border-jar-300",
                        "data-testid": "sample-junit-4.13",
                        children: [e.jsx("div", {
                            className: "font-semibold text-jar-600",
                            children: "junit-4.13.jar"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-500 mt-1",
                            children: "Unit testing framework"
                        }), e.jsx("div", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "~380KB"
                        })]
                    })]
                })]
            }), e.jsx(hn, {
                isOpen: d,
                onClose: () => l(!1),
                remainingUploads: x.remainingUploads,
                dailyLimit: x.dailyLimit,
                onUpgradeToPro: v,
                timeUntilReset: x.timeUntilReset
            })]
        })
    })
}
  , yn = ({width: s=24, height: t=24, className: r=""}) => e.jsxs("svg", {
    width: s,
    height: t,
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Minecraft Zombie Head Icon",
    className: r,
    children: [e.jsx("title", {
        children: "Minecraft Zombie Head Icon"
    }), e.jsx("style", {
        children: `.outline {
          fill: none;
          stroke: #211815;
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }`
    }), e.jsxs("g", {
        children: [e.jsx("rect", {
            x: "12",
            y: "12",
            width: "76",
            height: "76",
            fill: "#82a774"
        }), e.jsx("path", {
            d: "M 12,12 H 88 V 32 H 68 V 22 H 32 V 32 H 12 Z",
            fill: "#32612d"
        }), e.jsx("rect", {
            x: "44",
            y: "56",
            width: "12",
            height: "20",
            fill: "#5f9254"
        }), e.jsxs("g", {
            fill: "#160b0a",
            children: [e.jsx("rect", {
                x: "28",
                y: "42",
                width: "16",
                height: "10"
            }), e.jsx("rect", {
                x: "56",
                y: "42",
                width: "16",
                height: "10"
            })]
        })]
    }), e.jsxs("g", {
        className: "outline",
        children: [e.jsx("rect", {
            x: "12",
            y: "12",
            width: "76",
            height: "76"
        }), e.jsx("path", {
            d: "M 12,32 H 32 V 22 H 68 V 32 H 88"
        }), e.jsx("rect", {
            x: "44",
            y: "56",
            width: "12",
            height: "20"
        })]
    })]
})
  , Ns = 768;
function Jt() {
    const [s,t] = i.useState(void 0);
    return i.useEffect( () => {
        const r = window.matchMedia(`(max-width: ${Ns - 1}px)`)
          , n = () => {
            t(window.innerWidth < Ns)
        }
        ;
        return r.addEventListener("change", n),
        t(window.innerWidth < Ns),
        () => r.removeEventListener("change", n)
    }
    , []),
    !!s
}
const vn = () => ({
    enabled: !1,
    debug: !1,
    publisherId: "4885613024355323"
})
  , Vt = () => vn().enabled
  , jn = ({adSlot: s, adFormat: t="auto", fullWidthResponsive: r=!0, className: n="", placeholder: a=!1, onLoad: o, onError: d}) => {
    const l = i.useRef(null)
      , [p,x] = Te.useState(null);
    return i.useEffect( () => {
        {
            const m = new Error("AdSense is not enabled");
            x(m),
            d == null || d(m);
            return
        }
    }
    , [s, o, d]),
    a ? e.jsxs("div", {
        ref: l,
        className: V("adsense-ad-container w-full", n),
        children: [a && e.jsx("div", {
            className: "flex items-center justify-center text-gray-400 text-xs bg-gray-50 border border-gray-200 rounded p-4 min-h-[90px]",
            children: e.jsxs("span", {
                children: ["Ad placeholder (", s, ")"]
            })
        }), Vt()]
    }) : null
}
  , Ys = {
    id: "nordvpn-developer",
    programId: "nordvpn",
    name: "NordVPN - Secure VPN for Developers",
    branding: {
        logo: {
            primary: "/images/ads/nordvpn/nordvpn-hero-banner.png",
            icon: "/images/ads/nordvpn/nordvpn-banner-small.png"
        },
        banners: {
            hero: "/images/ads/nordvpn/nordvpn-hero-banner.png",
            square: "/images/ads/nordvpn/nordvpn-square-banner.png",
            small: "/images/ads/nordvpn/nordvpn-banner-small.png"
        },
        colors: {
            primary: "#4687FF",
            secondary: "#00C896",
            background: "#ffffff"
        }
    },
    content: {
        company: "NordVPN",
        tagline: "Secure VPN for Developers",
        description: "Military-grade encryption with blazing-fast speeds",
        features: ["Military-grade Encryption", "No-logs Policy", "6730+ Mbps Speeds", "30-day Guarantee"],
        cta: "Try Now →",
        contextual: {
            "minecraft-client": ["Stay unbannable. Protect your IP with NordVPN", "Boost your privacy while using mods & clients", "PvP safer. Hide your IP. Play anywhere", "School WiFi blocking Minecraft? Connect with NordVPN"],
            "minecraft-server": ["Run servers safely — DDoS protection with NordVPN", "Keep your modded world safe. Play with friends behind NordVPN", "Protect your Minecraft server from attacks", "Host securely. Shield your server IP with NordVPN"],
            "class-viewer": ["Deploy JARs, not your IP. Secure coding with NordVPN", "Protect your dev traffic. NordVPN for engineers", "Run apps safely from anywhere — NordVPN", "Remote debugging? Use NordVPN for a secure tunnel"],
            "json-viewer": ["Deploy JARs, not your IP. Secure coding with NordVPN", "Protect your dev traffic. NordVPN for engineers", "Secure API configuration with NordVPN", "Remote debugging? Use NordVPN for a secure tunnel"],
            "properties-viewer": ["Deploy JARs, not your IP. Secure coding with NordVPN", "Protect your dev traffic. NordVPN for engineers", "Secure server configuration with NordVPN", "Remote debugging? Use NordVPN for a secure tunnel"],
            "image-viewer": ["Deploy JARs, not your IP. Secure coding with NordVPN", "Protect your dev traffic. NordVPN for engineers", "Run apps safely from anywhere — NordVPN", "Remote debugging? Use NordVPN for a secure tunnel"],
            "binary-viewer": ["Deploy JARs, not your IP. Secure coding with NordVPN", "Protect your dev traffic. NordVPN for engineers", "Run apps safely from anywhere — NordVPN", "Remote debugging? Use NordVPN for a secure tunnel"],
            "main-page": ["One click. Total privacy. Try NordVPN today", "Your ISP sees everything. NordVPN keeps it private", "Fast. Private. Unlimited. NordVPN", "Join 14M+ users protecting their traffic with NordVPN"],
            general: ["One click. Total privacy. Try NordVPN today", "Your ISP sees everything. NordVPN keeps it private", "Fast. Private. Unlimited. NordVPN", "Join 14M+ users protecting their traffic with NordVPN"]
        },
        socialProof: {
            datacenter: "6730+ Mbps network",
            established: "Trusted by millions"
        }
    },
    targeting: {
        baseUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=130714&url_id=902",
        utmParams: {
            source: "jar-tools",
            medium: "affiliate-banner"
        },
        languages: ["en"]
    },
    enabled: !0,
    priority: 100
}
  , wn = () => {
    const t = new URLSearchParams(window.location.search).get("lang");
    return t ? [t] : navigator.languages || [navigator.language]
}
  , Nn = s => {
    if (!s.targeting.languages || s.targeting.languages.length === 0)
        return !0;
    const t = wn();
    return s.targeting.languages.some(r => t.some(n => n.toLowerCase().startsWith(r.toLowerCase())))
}
  , Fe = () => Nn(Ys) ? Ys : null
  , Je = s => Array.isArray(s) ? s[Math.floor(Math.random() * s.length)] : s
  , Sn = (s, t) => {
    if (s.jarName) {
        const r = s.jarName.toLowerCase();
        if (r.includes("wurst") || r.includes("aristois") || r.includes("meteor") || r.includes("inertia") || r.includes("liquidbounce") || r.includes("client") || r.includes("hack") || r.includes("cheat") || r.includes("pvp") || r.includes("optifine") || r.includes("forge") || r.includes("fabric") || r.includes("mod") || r.includes("sodium") || r.includes("iris"))
            return Je(t.content.contextual["minecraft-client"]) || "Stay unbannable. Protect your IP with NordVPN";
        if (r.includes("spigot") || r.includes("bukkit") || r.includes("paper") || r.includes("plugin") || r.includes("server") || r.includes("bungeecord") || r.includes("velocity") || r.includes("waterfall") || r.includes("essentials") || r.includes("worldedit") || r.includes("worldguard") || r.includes("vault"))
            return Je(t.content.contextual["minecraft-server"]) || "Run servers safely — DDoS protection with NordVPN";
        if (r.includes("spring") || r.includes("hibernate") || r.includes("maven") || r.includes("gradle") || r.includes("tomcat") || r.includes("jetty") || r.includes("enterprise") || r.includes("api") || r.includes("service") || r.includes("app") || r.includes("web") || r.includes("micro"))
            return s.viewer && t.content.contextual[s.viewer] ? Je(t.content.contextual[s.viewer]) : Je(t.content.contextual["class-viewer"]) || "Deploy JARs, not your IP. Secure coding with NordVPN"
    }
    if (s.viewer) {
        const r = t.content.contextual[s.viewer];
        if (r)
            return Je(r)
    }
    return Je(t.content.contextual.general) || t.content.tagline
}
;
class Cn {
    constructor() {
        Ge(this, "sessionId");
        Ge(this, "recentImpressions", new Set);
        Ge(this, "impressionDedupeTimeout", 1e3);
        this.sessionId = this.getOrCreateSessionId()
    }
    getOrCreateSessionId() {
        let t = sessionStorage.getItem("affiliate_session_id");
        return t || (t = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
        sessionStorage.setItem("affiliate_session_id", t)),
        t
    }
    getUserLanguageData() {
        const t = navigator.language || "en"
          , r = navigator.languages || [t]
          , n = this.detectUILanguage();
        return {
            userLanguage: t,
            userLanguages: r,
            uiLanguage: n
        }
    }
    detectUILanguage() {
        var o;
        const t = document.documentElement.lang;
        if (t && t.trim() !== "")
            return t;
        const r = ["i18nextLng", "locale", "language", "lang", "current_language"];
        for (const d of r) {
            const l = localStorage.getItem(d);
            if (l && l !== "undefined")
                return l
        }
        const n = window.location.pathname.match(/^\/([a-z]{2}(-[A-Z]{2})?)\//);
        if (n)
            return n[1];
        const a = (o = document.querySelector('meta[name="language"]')) == null ? void 0 : o.getAttribute("content");
        return a || navigator.language || "en"
    }
    trackImpression(t, r, n) {
        const a = r.viewer || "unknown-viewer"
          , o = r.filePath || "no-file"
          , d = Date.now();
        `${t.id}${a}${o}${d}`;
        const l = `${t.id}-${a}-${o}`;
        if (this.recentImpressions.has(l)) {
            console.log("[Analytics] Skipping double-click impression:", l);
            return
        }
        this.recentImpressions.add(l),
        setTimeout( () => {
            this.recentImpressions.delete(l)
        }
        , 1e3);
        const {userLanguage: p, userLanguages: x, uiLanguage: m} = this.getUserLanguageData()
          , c = {
            timestamp: new Date,
            campaignId: t.id,
            programId: t.programId,
            context: r,
            variant: n,
            sessionId: this.sessionId,
            userLanguage: p,
            userLanguages: x,
            uiLanguage: m
        };
        this.storeEvent("impression", c),
        console.log("[Analytics] Impression tracked:", c)
    }
    trackClick(t, r, n, a) {
        const o = this.buildUTMParams(t, r, n)
          , {userLanguage: d, userLanguages: l, uiLanguage: p} = this.getUserLanguageData()
          , x = {
            timestamp: new Date,
            campaignId: t.id,
            programId: t.programId,
            context: r,
            variant: n,
            sessionId: this.sessionId,
            utmParams: o,
            trackingUrl: a,
            userLanguage: d,
            userLanguages: l,
            uiLanguage: p
        };
        this.storeEvent("click", x),
        console.log("[Analytics] Click tracked:", x),
        window.open(a, "_blank", "noopener,noreferrer")
    }
    generateTrackingUrl(t, r, n) {
        const a = this.buildUTMParams(t, r, n)
          , o = this.buildUTMString(a);
        return `${t.targeting.baseUrl}?${o}`
    }
    buildUTMParams(t, r, n) {
        var a;
        return {
            source: t.targeting.utmParams.source,
            medium: t.targeting.utmParams.medium,
            campaign: this.getCampaignName(r),
            content: this.getContentId(t, r, n),
            term: this.getTerms(r),
            custom1: r.jarType || "unknown",
            custom2: r.viewer || "unknown",
            custom3: ((a = r.jarName) == null ? void 0 : a.substring(0, 20)) || "unknown"
        }
    }
    getCampaignName(t) {
        if (t.jarName) {
            const r = t.jarName.toLowerCase();
            if (r.includes("minecraft") || r.includes("forge") || r.includes("fabric"))
                return "minecraft-modding";
            if (r.includes("optifine"))
                return "performance-optimization";
            if (r.includes("create"))
                return "automation-mods"
        }
        return t.viewer === "class-viewer" ? "java-decompilation" : t.viewer === "json-viewer" ? "config-editing" : "general-hosting"
    }
    getContentId(t, r, n) {
        return `${t.programId}-${r.viewer || "unknown"}-${n}`
    }
    getTerms(t) {
        const r = [];
        if (t.jarName) {
            const n = t.jarName.replace(/\.(jar|zip)$/i, "").replace(/-\d+\.\d+.*$/i, "").toLowerCase();
            r.push(n)
        }
        return t.jarType && r.push(t.jarType),
        r.join("-") || "minecraft-modding"
    }
    buildUTMString(t) {
        const r = [`utm_source=${encodeURIComponent(t.source)}`, `utm_medium=${encodeURIComponent(t.medium)}`, `utm_campaign=${encodeURIComponent(t.campaign)}`, `utm_content=${encodeURIComponent(t.content)}`];
        return t.term && r.push(`utm_term=${encodeURIComponent(t.term)}`),
        t.custom1 && r.push(`utm_custom1=${encodeURIComponent(t.custom1)}`),
        t.custom2 && r.push(`utm_custom2=${encodeURIComponent(t.custom2)}`),
        t.custom3 && r.push(`utm_custom3=${encodeURIComponent(t.custom3)}`),
        r.join("&")
    }
    storeEvent(t, r) {
        try {
            const n = `affiliate_${t}s`
              , a = JSON.parse(localStorage.getItem(n) || "[]");
            a.push(r),
            a.length > 1e3 && a.splice(0, a.length - 1e3),
            localStorage.setItem(n, JSON.stringify(a)),
            this.sendToPostHog(t, r)
        } catch (n) {
            console.warn("[Analytics] Failed to store event:", n)
        }
    }
    sendToPostHog(t, r) {
        try {
            if (!vs || !vs.__loaded) {
                console.warn("[Analytics] PostHog not loaded, skipping external tracking");
                return
            }
            const n = t === "impression" ? "Affiliate Banner Impression" : "Affiliate Banner Click"
              , a = {
                campaign_id: r.campaignId,
                program_id: r.programId,
                variant: r.variant,
                viewer: r.context.viewer,
                file_path: r.context.filePath,
                file_type: r.context.fileType,
                jar_name: r.context.jarName,
                jar_type: r.context.jarType,
                location: r.context.location,
                user_segment: r.context.userSegment,
                trigger: r.context.trigger,
                user_language: r.userLanguage,
                user_languages: r.userLanguages,
                ui_language: r.uiLanguage,
                session_id: r.sessionId,
                timestamp: r.timestamp.toISOString()
            };
            t === "click" && "trackingUrl"in r && (a.tracking_url = r.trackingUrl,
            a.utm_source = r.utmParams.source,
            a.utm_medium = r.utmParams.medium,
            a.utm_campaign = r.utmParams.campaign,
            a.utm_content = r.utmParams.content,
            a.utm_term = r.utmParams.term,
            a.utm_custom1 = r.utmParams.custom1,
            a.utm_custom2 = r.utmParams.custom2,
            a.utm_custom3 = r.utmParams.custom3),
            vs.capture(n, a),
            console.log(`[Analytics] Sent ${n} to PostHog:`, a)
        } catch (n) {
            console.warn("[Analytics] Failed to send to PostHog:", n)
        }
    }
    getAnalyticsSummary() {
        try {
            const t = JSON.parse(localStorage.getItem("affiliate_impressions") || "[]")
              , r = JSON.parse(localStorage.getItem("affiliate_clicks") || "[]");
            return {
                totalImpressions: t.length,
                totalClicks: r.length,
                clickThroughRate: t.length > 0 ? (r.length / t.length * 100).toFixed(2) + "%" : "0%",
                lastActivity: r.length > 0 ? new Date(r[r.length - 1].timestamp) : null
            }
        } catch (t) {
            return console.warn("[Analytics] Failed to get summary:", t),
            null
        }
    }
}
const Ye = new Cn
  , _s = ({campaign: s, context: t, variant: r, className: n="", isMinecraftMod: a, onImpression: o, onClick: d, onCloseClick: l}) => {
    var v, b;
    const {isProUser: p} = ke()
      , x = Jt()
      , [m,c] = i.useState(!1)
      , [u,f] = i.useState(!1);
    i.useEffect( () => {
        var N, S;
        if (!(s != null && s.enabled)) {
            c(!1);
            return
        }
        (S = (N = s.targeting) == null ? void 0 : N.contentFilter) != null && S.requireMinecraftMod ? c(a === null ? !1 : a) : c(!0)
    }
    , [s, a]),
    i.useEffect( () => {
        var N, S;
        s != null && s.enabled && m && !u && ((S = (N = s.targeting) == null ? void 0 : N.contentFilter) != null && S.requireMinecraftMod ? a !== null && a && (o ? o(s, t, r) : Ye.trackImpression(s, t, r),
        f(!0)) : (o ? o(s, t, r) : Ye.trackImpression(s, t, r),
        f(!0)))
    }
    , [s, m, u, a, o, t, r]);
    const h = i.useMemo( () => Sn(t, s), [t, s]);
    if (p || x || !(s != null && s.enabled) || !m)
        return null;
    const g = () => {
        const N = Ye.generateTrackingUrl(s, t, r)
          , S = {
            ...t,
            messageVariant: h
        };
        d ? d(s, S, r, N) : Ye.trackClick(s, S, r, N)
    }
    ;
    return r === "minimal" ? e.jsxs("div", {
        className: `relative rounded-lg p-3 cursor-pointer transition-all hover:shadow-md hover:scale-[1.01] ${n}`,
        style: {
            backgroundColor: s.branding.colors.primary
        },
        onClick: g,
        children: [l && e.jsx("button", {
            onClick: N => {
                N.stopPropagation(),
                l()
            }
            ,
            className: "absolute top-2 right-2 px-2 py-1 text-xs rounded bg-black bg-opacity-20 hover:bg-opacity-40 text-white font-medium transition-all z-10",
            title: "Learn about ad-free Pro version",
            children: "Hide Ads"
        }), e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [e.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [e.jsx("div", {
                    className: "flex-shrink-0",
                    children: e.jsx("img", {
                        src: "/images/ads/nordvpn/nordvpn-logo-official.svg",
                        alt: "NordVPN",
                        className: "h-6 w-auto",
                        onError: N => {
                            const S = N.target;
                            S.src = s.branding.logo.icon || ""
                        }
                    })
                }), e.jsxs("div", {
                    children: [e.jsx("div", {
                        className: "text-white text-sm font-bold",
                        children: h
                    }), e.jsx("div", {
                        className: "text-gray-200 text-xs",
                        children: "30-day money-back guarantee"
                    })]
                })]
            }), e.jsx("div", {
                className: "flex items-center",
                children: e.jsxs("div", {
                    className: "px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90 flex items-center space-x-2",
                    style: {
                        backgroundColor: s.branding.colors.secondary
                    },
                    children: [e.jsx("span", {
                        children: s.content.cta
                    }), e.jsx(Us, {
                        size: 14
                    })]
                })
            })]
        })]
    }) : r === "small" ? e.jsxs("div", {
        className: `relative cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-center ${n}`,
        onClick: g,
        children: [l && e.jsx("button", {
            onClick: N => {
                N.stopPropagation(),
                l()
            }
            ,
            className: "absolute top-2 right-2 px-2 py-1 text-xs rounded bg-black bg-opacity-30 hover:bg-opacity-60 text-white font-medium transition-all z-10",
            title: "Learn about ad-free Pro version",
            children: "Hide Ads"
        }), e.jsx("img", {
            src: ((v = s.branding.banners) == null ? void 0 : v.small) || s.branding.logo.icon,
            alt: s.content.company,
            className: "max-w-full h-auto block rounded-lg shadow-lg hover:shadow-xl transition-shadow",
            style: {
                maxHeight: "120px"
            },
            onError: N => {
                const S = N.target;
                S.style.display = "none";
                const E = S.parentElement;
                E && (E.style.minHeight = "120px",
                E.style.display = "flex",
                E.style.alignItems = "center",
                E.style.justifyContent = "center",
                E.style.backgroundColor = "#4687FF")
            }
        })]
    }) : e.jsxs("div", {
        className: `relative cursor-pointer transition-all hover:scale-[1.01] flex items-center justify-center ${n}`,
        onClick: g,
        children: [l && e.jsx("button", {
            onClick: N => {
                N.stopPropagation(),
                l()
            }
            ,
            className: "absolute top-3 right-3 px-3 py-1.5 text-sm rounded bg-black bg-opacity-30 hover:bg-opacity-60 text-white font-medium transition-all z-10",
            title: "Learn about ad-free Pro version",
            children: "Hide Ads"
        }), e.jsx("img", {
            src: ((b = s.branding.banners) == null ? void 0 : b.hero) || s.branding.logo.primary,
            alt: s.content.company,
            className: "max-w-full h-auto block rounded-xl shadow-xl hover:shadow-2xl transition-shadow",
            style: {
                maxHeight: "400px"
            },
            onError: N => {
                const S = N.target;
                S.style.display = "none";
                const E = S.parentElement;
                E && (E.style.minHeight = "320px",
                E.style.display = "flex",
                E.style.alignItems = "center",
                E.style.justifyContent = "center",
                E.style.backgroundColor = "#4687FF")
            }
        })]
    })
}
  , Bt = ({isOpen: s, onClose: t}) => {
    const r = () => {
        window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
        t()
    }
      , n = () => {
        window.open("/pro", "_blank", "noopener,noreferrer"),
        t()
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: t,
        children: e.jsxs(ye, {
            className: "sm:max-w-[500px]",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(be, {
                        className: "h-5 w-5 text-yellow-500"
                    }), "Want an Ad-Free Experience?"]
                }), e.jsx(Ne, {
                    children: "Upgrade to JAR Tools Pro to remove all ads and unlock premium features."
                })]
            }), e.jsxs("div", {
                className: "space-y-4 py-4",
                children: [e.jsxs("div", {
                    className: "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [e.jsx(ht, {
                            className: "h-4 w-4 text-yellow-600"
                        }), e.jsx("span", {
                            className: "font-semibold text-yellow-800",
                            children: "100% Ad-Free Experience"
                        })]
                    }), e.jsx("p", {
                        className: "text-sm text-yellow-700",
                        children: "Remove all advertisements permanently and enjoy distraction-free JAR editing."
                    })]
                }), e.jsxs("div", {
                    className: "space-y-3",
                    children: [e.jsx("h4", {
                        className: "font-medium text-gray-900",
                        children: "Additional Pro Features:"
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [e.jsx(us, {
                            className: "h-4 w-4 text-blue-500 flex-shrink-0"
                        }), e.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Unlimited class decompilation (no daily limits)"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [e.jsx(qe, {
                            className: "h-4 w-4 text-green-500 flex-shrink-0"
                        }), e.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Unlimited JAR exports with modifications"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [e.jsx(He, {
                            className: "h-4 w-4 text-purple-500 flex-shrink-0"
                        }), e.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Skip all security disclaimers and confirmations"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [e.jsx(be, {
                            className: "h-4 w-4 text-yellow-500 flex-shrink-0"
                        }), e.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Advanced JSON tools (format, minify, enhanced validation)"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-lg p-3",
                    children: e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [e.jsxs("div", {
                            children: [e.jsx("div", {
                                className: "font-medium text-blue-900",
                                children: "Launch Special"
                            }), e.jsx("div", {
                                className: "text-sm text-blue-700",
                                children: "Limited time offer"
                            })]
                        }), e.jsxs("div", {
                            className: "text-right",
                            children: [e.jsx("div", {
                                className: "text-lg font-bold text-blue-900",
                                children: "$0.99/month"
                            }), e.jsx("div", {
                                className: "text-xs text-blue-600 line-through",
                                children: "was $11.99"
                            })]
                        })]
                    })
                })]
            }), e.jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [e.jsx(_, {
                    variant: "outline",
                    onClick: t,
                    className: "flex-1",
                    children: "Keep Free Version"
                }), e.jsx(_, {
                    onClick: n,
                    variant: "outline",
                    className: "flex-1",
                    children: "Learn More"
                }), e.jsx(_, {
                    onClick: r,
                    className: "flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white",
                    children: "Upgrade Now"
                })]
            })]
        })
    })
}
  , Pe = ({adSlot: s, adFormat: t="auto", campaign: r, context: n, variant: a, isMinecraftMod: o, isMainPageAd: d=!1, className: l=""}) => {
    const {isProUser: p} = ke()
      , x = Jt()
      , [m,c] = i.useState({
        useAdSense: !1,
        adSenseError: !1,
        showFallback: !1,
        showProModal: !1
    });
    if (i.useEffect( () => {
        const v = Vt();
        c(b => ({
            ...b,
            useAdSense: v,
            showFallback: !v
        }))
    }
    , []),
    x || !d)
        return null;
    const u = v => {
        console.warn("[AdManager] AdSense ad failed:", v),
        c(b => ({
            ...b,
            adSenseError: !0,
            showFallback: !0
        }))
    }
      , f = () => {
        c(v => ({
            ...v,
            showFallback: !1
        }))
    }
      , h = () => {
        c(v => ({
            ...v,
            showProModal: !0
        }))
    }
      , g = () => {
        c(v => ({
            ...v,
            showProModal: !1
        }))
    }
    ;
    return m.useAdSense && !m.adSenseError && !m.showFallback ? e.jsx(jn, {
        adSlot: s,
        adFormat: t,
        className: l,
        onLoad: f,
        onError: u,
        placeholder: !1
    }) : m.showFallback || m.adSenseError ? e.jsxs(e.Fragment, {
        children: [e.jsx(_s, {
            campaign: r,
            context: n,
            variant: a,
            className: l,
            isMinecraftMod: o,
            onCloseClick: h
        }), e.jsx(Bt, {
            isOpen: m.showProModal,
            onClose: g
        })]
    }) : null
}
  , $e = i.forwardRef( ({className: s, type: t, ...r}, n) => e.jsx("input", {
    type: t,
    className: V("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", s),
    ref: n,
    ...r
}));
$e.displayName = "Input";
const kn = Ms("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , ys = i.forwardRef( ({className: s, ...t}, r) => e.jsx(xt, {
    ref: r,
    className: V(kn(), s),
    ...t
}));
ys.displayName = xt.displayName;
const Le = i.forwardRef( ({className: s, ...t}, r) => e.jsx("textarea", {
    className: V("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", s),
    ref: r,
    ...t
}));
Le.displayName = "Textarea";
const En = Ms("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function An({className: s, variant: t, ...r}) {
    return e.jsx("div", {
        className: V(En({
            variant: t
        }), s),
        ...r
    })
}
bs.registerLanguage("java", on);
bs.registerLanguage("json", ln);
bs.registerLanguage("properties", cn);
const Wt = i.forwardRef( ({className: s, orientation: t="horizontal", decorative: r=!0, ...n}, a) => e.jsx(pt, {
    ref: a,
    decorative: r,
    orientation: t,
    className: V("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", s),
    ...n
}));
Wt.displayName = pt.displayName;
const os = {
    "jar-viewer": {
        title: "JAR Viewer",
        icon: ({size: s, className: t}) => e.jsx("svg", {
            width: s || 24,
            height: s || 24,
            className: t,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: e.jsx("path", {
                fillRule: "evenodd",
                d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            })
        }),
        badge: "Interactive",
        colors: {
            icon: "text-blue-600",
            badgeBg: "bg-blue-100",
            badgeText: "text-blue-800",
            border: "border-blue-200",
            rippleFrom: "from-blue-300/60",
            rippleTo: "to-indigo-300/60"
        }
    },
    "class-decompiler": {
        title: "Class Decompiler Online",
        icon: ({size: s, className: t}) => e.jsx("svg", {
            width: s || 24,
            height: s || 24,
            className: t,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: e.jsx("path", {
                d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            })
        }),
        badge: "Single File",
        colors: {
            icon: "text-purple-600",
            badgeBg: "bg-purple-100",
            badgeText: "text-purple-800",
            border: "border-purple-200",
            rippleFrom: "from-purple-300/60",
            rippleTo: "to-pink-300/60"
        }
    },
    "jar-decompiler": {
        title: "JAR Decompiler Online",
        icon: ({size: s, className: t}) => e.jsx("svg", {
            width: s || 24,
            height: s || 24,
            className: t,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: e.jsx("path", {
                fillRule: "evenodd",
                d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                clipRule: "evenodd"
            })
        }),
        badge: "All classes",
        colors: {
            icon: "text-green-600",
            badgeBg: "bg-green-100",
            badgeText: "text-green-800",
            border: "border-green-200",
            rippleFrom: "from-green-300/60",
            rippleTo: "to-emerald-300/60"
        }
    }
}
  , In = s => [{
    type: "jar-viewer",
    path: "/",
    label: "JAR Viewer",
    icon: os["jar-viewer"].icon
}, {
    type: "class-decompiler",
    path: "/class-decompiler",
    label: "Class Decompiler Online",
    icon: os["class-decompiler"].icon
}, {
    type: "jar-decompiler",
    path: "/jar-decompiler",
    label: "JAR Decompiler Online",
    icon: os["jar-decompiler"].icon
}].filter(r => r.type !== s)
  , Tn = ({type: s, className: t="", showOtherTools: r=!0, customTitle: n, customBadge: a}) => {
    const o = os[s]
      , d = o.icon
      , l = n || o.title
      , {isProUser: p, deactivateLicense: x} = ke()
      , m = a || (s === "jar-decompiler" && p ? "Pro" : o.badge);
    In(s);
    const c = it()
      , u = ot()
      , [f,h] = i.useState(!1);
    return i.useEffect( () => {
        const g = c.state;
        if (g != null && g.headerPulse) {
            h(!0);
            const v = `${c.pathname}${c.search}${c.hash}`;
            u(v, {
                replace: !0
            });
            const b = setTimeout( () => h(!1), 700);
            return () => clearTimeout(b)
        }
    }
    , [c.key]),
    e.jsx("header", {
        className: `bg-white border-b ${o.colors.border} sticky top-0 z-10 ${t}`,
        children: e.jsxs("div", {
            className: "relative overflow-hidden container mx-auto px-4 py-4 flex items-center justify-between",
            children: [e.jsx("span", {
                "aria-hidden": !0,
                className: `pointer-events-none absolute left-0 right-0 bottom-0 h-1 origin-center transform transition-all duration-700 bg-gradient-to-r ${o.colors.rippleFrom} ${o.colors.rippleTo} ${f ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`
            }), e.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [e.jsxs(Es, {
                    to: "/",
                    className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors",
                    children: [e.jsx(Sr, {
                        size: 20,
                        className: "mr-2"
                    }), "Back to Home"]
                }), e.jsx(Wt, {
                    orientation: "vertical",
                    className: "h-6"
                }), e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [e.jsx(d, {
                        size: 24,
                        className: o.colors.icon
                    }), e.jsx("h1", {
                        className: "text-xl font-bold text-gray-900",
                        style: {
                            fontFamily: "Space Grotesk, sans-serif"
                        },
                        children: l
                    }), m === "Pro" ? e.jsxs("div", {
                        className: "flex items-center text-yellow-600",
                        children: [e.jsx(be, {
                            size: 14,
                            className: "mr-1"
                        }), e.jsx("span", {
                            className: "text-sm font-medium",
                            children: "Pro"
                        }), e.jsx(_, {
                            variant: "ghost",
                            size: "sm",
                            onClick: x,
                            className: "text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 h-5 w-5 p-0 ml-1",
                            title: "Exit Pro version",
                            children: e.jsx(Ue, {
                                size: 12
                            })
                        })]
                    }) : m ? e.jsx(An, {
                        variant: "secondary",
                        className: `${o.colors.badgeBg} ${o.colors.badgeText}`,
                        children: m
                    }) : null]
                })]
            }), r && e.jsx("div", {
                className: "flex items-center",
                children: e.jsxs(Es, {
                    to: "/all-tools",
                    className: "text-sm text-gray-600 hover:text-gray-900 flex items-center transition-colors",
                    children: [e.jsx("svg", {
                        width: 16,
                        height: 16,
                        className: "mr-1",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: e.jsx("path", {
                            d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        })
                    }), "Other Tools"]
                })
            })]
        })
    })
}
  , Pn = ({className: s}) => {
    const {isProUser: t, activationStatus: r, activateLicense: n, deactivateLicense: a} = ke()
      , [o,d] = i.useState("")
      , [l,p] = i.useState(null)
      , [x,m] = i.useState(!1)
      , c = async () => {
        const h = o.trim();
        if (h) {
            p(null),
            m(!0);
            try {
                const g = await fetch(xs("/api/v1/verify"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        licenseKey: h
                    })
                })
                  , v = await g.json();
                if (!g.ok)
                    throw new Error(v.error || "Invalid license key");
                if (v.success)
                    await n(h),
                    d("");
                else
                    throw new Error(v.error || "License verification failed")
            } catch (g) {
                const v = g instanceof Error ? g.message : "Activation failed";
                p(v)
            } finally {
                m(!1)
            }
        }
    }
      , u = h => {
        h.key === "Enter" && c()
    }
      , f = h => {
        h || (p(null),
        d(""))
    }
    ;
    return e.jsxs(we, {
        onOpenChange: f,
        children: [e.jsx(mn, {
            asChild: !0,
            children: e.jsxs(_, {
                variant: "outline",
                size: "sm",
                className: `inline-flex items-center px-3 h-8 border-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 hover:from-yellow-500 hover:to-yellow-600 font-bold shadow-md ${s}`,
                title: "Activate Pro Version",
                children: [e.jsx(Cr, {
                    size: 16,
                    className: "md:mr-1.5"
                }), e.jsx("span", {
                    className: "hidden md:inline font-bold text-sm",
                    children: "Activate Pro"
                })]
            })
        }), e.jsxs(ye, {
            className: "sm:max-w-[425px]",
            children: [e.jsxs(ve, {
                children: [e.jsx(je, {
                    children: "Pro Version Status"
                }), e.jsx(Ne, {
                    children: t ? "Your Pro features are active." : e.jsxs(e.Fragment, {
                        children: ["Enter your Gumroad license key to", " ", e.jsx("a", {
                            href: "/pro",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-blue-500 hover:underline",
                            children: "unlock Pro features"
                        }), "."]
                    })
                })]
            }), t ? e.jsxs("div", {
                className: "space-y-4 pt-4",
                children: [e.jsxs("div", {
                    className: "text-sm text-green-600 flex items-center",
                    children: [e.jsx(gt, {
                        className: "mr-2 h-4 w-4"
                    }), "Pro features successfully activated!"]
                }), e.jsx(_, {
                    variant: "outline",
                    size: "sm",
                    onClick: a,
                    className: "text-xs w-full",
                    children: "Deactivate License"
                })]
            }) : e.jsxs("div", {
                className: "space-y-3 pt-4",
                children: [e.jsxs("div", {
                    className: "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3 mb-4",
                    children: [e.jsx("h4", {
                        className: "font-medium text-gray-900 mb-2 text-sm",
                        children: "Pro Features:"
                    }), e.jsxs("div", {
                        className: "space-y-1.5 text-xs text-gray-700",
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(kr, {
                                className: "w-3 h-3 text-blue-500 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Unlimited Class Decompilation"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(ms, {
                                className: "w-3 h-3 text-purple-500 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Advanced JSON Editor"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(is, {
                                className: "w-3 h-3 text-green-600 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Unlimited Exports"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(Er, {
                                className: "w-3 h-3 text-emerald-500 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Advanced Properties Editor"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(is, {
                                className: "w-3 h-3 text-orange-500 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "No Ads - Clean experience"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(is, {
                                className: "w-3 h-3 text-blue-600 flex-shrink-0"
                            }), e.jsx("a", {
                                href: "/jar-decompiler",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:underline",
                                onClick: h => h.stopPropagation(),
                                children: "Access to Unlimited Jar Source Generator"
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx(Ar, {
                        className: "h-4 w-4 text-muted-foreground flex-shrink-0"
                    }), e.jsx($e, {
                        type: "text",
                        placeholder: "Enter license key...",
                        value: o,
                        onChange: h => d(h.target.value),
                        onKeyDown: u,
                        disabled: x,
                        className: "flex-grow"
                    }), e.jsxs(_, {
                        onClick: c,
                        disabled: x || !o.trim(),
                        size: "sm",
                        children: [x && e.jsx(Fs, {
                            className: "mr-2 h-4 w-4 animate-spin"
                        }), x ? "Activating..." : "Activate"]
                    })]
                }), l && e.jsxs("p", {
                    className: "text-sm text-red-600 flex items-center mt-2",
                    children: [e.jsx(Ir, {
                        className: "mr-2 h-4 w-4"
                    }), l]
                })]
            }), e.jsx("div", {
                className: "mt-4 pt-4 border-t flex justify-center",
                children: e.jsx("button", {
                    onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                    className: "inline-block px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow cursor-pointer",
                    children: "Buy Licence Key"
                })
            })]
        })]
    })
}
  , Ht = i.createContext(void 0)
  , _n = 24 * 60 * 60 * 1e3
  , Xs = 50
  , Qa = ({children: s}) => {
    const [t,r] = i.useState(new Map)
      , n = i.useCallback( (u, f) => `${u || "default"}_${f}`, [])
      , a = i.useCallback(u => Date.now() - u.timestamp > _n, [])
      , o = i.useCallback(u => {
        const f = new Map;
        for (const [h,g] of u.entries())
            a(g) || f.set(h, g);
        return f
    }
    , [a])
      , d = i.useCallback(u => {
        if (u.size <= Xs)
            return u;
        const f = Array.from(u.entries()).sort( ([,h], [,g]) => g.timestamp - h.timestamp).slice(0, Xs);
        return new Map(f)
    }
    , [])
      , l = i.useCallback( (u, f) => {
        const h = n(u, f)
          , g = t.get(h);
        return g ? a(g) ? (r(v => {
            const b = new Map(v);
            return b.delete(h),
            b
        }
        ),
        null) : g.source : null
    }
    , [t, n, a])
      , p = i.useCallback( (u, f, h) => {
        const g = n(u, f)
          , v = {
            source: h,
            timestamp: Date.now()
        };
        r(b => {
            const N = new Map(b);
            N.set(g, v);
            const S = o(N);
            return d(S)
        }
        )
    }
    , [n, o, d])
      , x = i.useCallback( () => {
        r(new Map)
    }
    , [])
      , m = i.useCallback( () => t.size, [t.size])
      , c = {
        getCachedDecompilation: l,
        setCachedDecompilation: p,
        clearCache: x,
        getCacheSize: m
    };
    return e.jsx(Ht.Provider, {
        value: c,
        children: s
    })
}
  , Kt = () => {
    const s = i.useContext(Ht);
    if (s === void 0)
        throw new Error("useDecompilationCache must be used within a DecompilationCacheProvider");
    return s
}
  , Rn = ({isOpen: s, onClose: t, remainingDecompiles: r, dailyLimit: n, onUpgradeToPro: a}) => e.jsx(we, {
    open: s,
    onOpenChange: t,
    children: e.jsxs(ye, {
        className: "sm:max-w-md",
        children: [e.jsxs(ve, {
            children: [e.jsx(je, {
                children: "Decompilation Successful"
            }), e.jsx(Ne, {
                children: "Your Java class file has been decompiled successfully."
            })]
        }), e.jsxs("div", {
            className: "py-4",
            children: [e.jsx("div", {
                className: "bg-green-50 border border-green-200 rounded-md p-4 mb-4",
                children: e.jsx("p", {
                    className: "text-green-700 font-medium",
                    children: n ? `You have ${r} of ${n} free decompilations remaining today.` : `You have ${r} free decompilations remaining today.`
                })
            }), e.jsx("p", {
                className: "text-gray-600 text-sm",
                children: "Upgrade to Jar Editor Online Pro for unlimited decompilations and additional features."
            })]
        }), e.jsxs(Ce, {
            className: "flex justify-between sm:justify-between",
            children: [e.jsx(_, {
                variant: "outline",
                onClick: o => {
                    o.preventDefault(),
                    o.stopPropagation(),
                    t()
                }
                ,
                children: "Continue"
            }), e.jsx(_, {
                onClick: o => {
                    o.preventDefault(),
                    o.stopPropagation(),
                    a()
                }
                ,
                className: "bg-purple-600 hover:bg-purple-700",
                children: "Upgrade to Pro"
            })]
        })]
    })
})
  , Dn = ({isOpen: s, onClose: t, dailyLimit: r, onUpgradeToPro: n}) => {
    const [a,o] = i.useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    return i.useEffect( () => {
        if (!s)
            return;
        const d = () => {
            const p = new Date
              , x = new Date;
            x.setHours(24, 0, 0, 0);
            const m = x.getTime() - p.getTime()
              , c = Math.floor(m / (1e3 * 60 * 60))
              , u = Math.floor(m % (1e3 * 60 * 60) / (1e3 * 60))
              , f = Math.floor(m % (1e3 * 60) / 1e3);
            return {
                hours: c,
                minutes: u,
                seconds: f
            }
        }
        ;
        o(d());
        const l = setInterval( () => {
            o(d())
        }
        , 1e3);
        return () => clearInterval(l)
    }
    , [s]),
    e.jsx(we, {
        open: s,
        onOpenChange: t,
        children: e.jsxs(ye, {
            className: "sm:max-w-md",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(be, {
                        className: "h-5 w-5 text-yellow-500"
                    }), e.jsx("span", {
                        children: "Daily Decompilation Limit Reached"
                    })]
                }), e.jsx(Ne, {
                    children: r ? `You've used all ${r} of your free decompilations for today.` : "You've reached your free decompilation limit for today."
                })]
            }), e.jsxs("div", {
                className: "flex flex-col space-y-4 py-4",
                children: [e.jsxs("div", {
                    className: "bg-purple-50 p-4 rounded-md",
                    children: [e.jsx("h4", {
                        className: "font-medium text-purple-800 mb-2",
                        children: "Upgrade to Pro for unlimited decompilations"
                    }), e.jsx("p", {
                        className: "text-sm text-purple-600",
                        children: "Pro gives you unlimited access to Java decompilation and many other premium features."
                    })]
                }), e.jsxs("div", {
                    className: "bg-blue-50 border border-blue-100 rounded-md p-3 flex items-center",
                    children: [e.jsx(He, {
                        className: "h-4 w-4 text-blue-500 mr-2 flex-shrink-0"
                    }), e.jsxs("p", {
                        className: "text-sm text-blue-700",
                        children: ["Free tier limit resets in: ", e.jsxs("span", {
                            className: "font-medium",
                            children: [a.hours, "h ", a.minutes, "m ", a.seconds, "s"]
                        })]
                    })]
                }), e.jsx("div", {
                    className: "bg-amber-50 p-3 rounded-md border border-amber-200",
                    children: e.jsxs("p", {
                        className: "text-amber-800 text-xs",
                        children: ["💎 ", e.jsx("strong", {
                            children: "Pro users"
                        }), " never see this limit modal and have unlimited decompilations."]
                    })
                })]
            }), e.jsxs(Ce, {
                className: "sm:justify-between",
                children: [e.jsx(_, {
                    variant: "outline",
                    onClick: t,
                    children: "Maybe Later"
                }), e.jsxs(_, {
                    onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                    className: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
                    children: [e.jsx(be, {
                        className: "mr-2 h-4 w-4"
                    }), "Upgrade to Pro"]
                })]
            })]
        })
    })
}
  , Ln = ({zipInstance: s, onSearch: t, onClearSearch: r}) => {
    const [n,a] = i.useState("")
      , [o,d] = i.useState(!1)
      , l = async () => {
        if (!s || !n.trim()) {
            r();
            return
        }
        d(!0);
        const m = [];
        try {
            const c = Object.keys(s.files);
            for (const u of c) {
                const f = s.files[u];
                if (!f.dir)
                    try {
                        ((await f.async("string")).match(new RegExp(n,"gi")) || []).length > 0 && m.push(u)
                    } catch {
                        try {
                            const g = await f.async("arraybuffer")
                              , v = new Uint8Array(g);
                            let b = "";
                            for (let S = 0; S < v.length; S++)
                                v[S] >= 32 && v[S] < 127 && (b += String.fromCharCode(v[S]));
                            (b.match(new RegExp(n,"gi")) || []).length > 0 && m.push(u)
                        } catch (g) {
                            console.error(`Error processing binary file ${u}:`, g)
                        }
                    }
            }
            t(m, n)
        } catch (c) {
            console.error("Error during search:", c),
            r()
        } finally {
            d(!1)
        }
    }
      , p = () => {
        a(""),
        r()
    }
      , x = m => {
        m.key === "Enter" && l()
    }
    ;
    return e.jsx("div", {
        className: "px-2 pb-3",
        children: e.jsxs("div", {
            className: "flex gap-2",
            children: [e.jsxs("div", {
                className: "relative flex-1",
                children: [e.jsx($e, {
                    value: n,
                    onChange: m => a(m.target.value),
                    onKeyPress: x,
                    placeholder: "Search files...",
                    disabled: o,
                    className: "pl-8 h-8 text-sm border-gray-200 focus:border-jar-300 focus:ring-jar-200"
                }), e.jsx(bt, {
                    className: "absolute left-2.5 top-2 h-4 w-4 text-gray-400"
                })]
            }), e.jsx(_, {
                onClick: l,
                disabled: o || !n.trim(),
                size: "sm",
                className: "h-8 px-3 text-xs bg-jar-600 hover:bg-jar-700 text-white font-medium whitespace-nowrap",
                children: o ? "Searching..." : "Search"
            }), n && e.jsx(_, {
                onClick: p,
                disabled: o,
                variant: "outline",
                size: "sm",
                className: "h-8 px-3 text-xs border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium whitespace-nowrap",
                children: "Clear"
            })]
        })
    })
}
  , On = ({entries: s, zipInstance: t, selectedFile: r, modifiedFiles: n, onSelectFile: a, onSearch: o, onClearSearch: d, searchMatches: l, isSearchActive: p, onSupportClick: x, jarInstanceId: m}) => {
    const [c,u] = i.useState(new Set)
      , {getCachedDecompilation: f} = Kt();
    i.useEffect( () => {
        if (p) {
            const T = new Set(c);
            l.forEach(R => {
                const O = R.split("/");
                let C = "";
                for (let B = 0; B < O.length - 1; B++)
                    C += O[B] + "/",
                    T.add(C)
            }
            ),
            u(T)
        }
    }
    , [l, p]);
    const h = T => {
        if (T.isDirectory || T.fileType === "class")
            return !1;
        const R = ["jar", "zip", "png", "jpg", "jpeg", "gif", "pdf", "exe", "dll"];
        return !(T.fileType && R.includes(T.fileType.toLowerCase()))
    }
      , g = T => {
        if (T.isDirectory)
            return {
                Icon: Rr,
                activeColor: "text-jar-500"
            };
        switch (T.fileType) {
        case "json":
            return {
                Icon: Fr,
                activeColor: "text-yellow-500"
            };
        case "png":
        case "jpg":
        case "jpeg":
            return {
                Icon: Ur,
                activeColor: "text-green-500"
            };
        case "gif":
            return {
                Icon: Mr,
                activeColor: "text-pink-500"
            };
        case "bmp":
        case "webp":
        case "ico":
            return {
                Icon: Or,
                activeColor: "text-blue-500"
            };
        case "svg":
            return {
                Icon: Oe,
                activeColor: "text-indigo-500"
            };
        case "class":
            return f(m, T.path) !== null ? {
                Icon: $s,
                activeColor: "text-green-600"
            } : {
                Icon: wt,
                activeColor: "text-purple-600"
            };
        case "jar":
        case "zip":
            return {
                Icon: is,
                activeColor: "text-orange-500"
            };
        case "xml":
        case "html":
        case "css":
            return {
                Icon: Oe,
                activeColor: "text-blue-500"
            };
        case "tsx":
        case "jsx":
            return {
                Icon: Oe,
                activeColor: "text-cyan-500"
            };
        case "js":
        case "ts":
            return {
                Icon: Oe,
                activeColor: "text-yellow-600"
            };
        case "properties":
            return {
                Icon: Lr,
                activeColor: "text-orange-600"
            };
        case "md":
            return {
                Icon: Dr,
                activeColor: "text-blue-600"
            };
        case "txt":
            return {
                Icon: Is,
                activeColor: "text-slate-600"
            };
        default:
            return {
                Icon: Is,
                activeColor: "text-slate-500"
            }
        }
    }
      , v = (T, R) => {
        u(O => {
            const C = new Set(O);
            if (C.has(T))
                C.delete(T);
            else {
                C.add(T);
                let B = R;
                for (; B.children && B.children.length === 1 && B.children[0].isDirectory; )
                    C.add(B.children[0].path),
                    B = B.children[0]
            }
            return C
        }
        )
    }
      , b = T => {
        const R = []
          , O = C => {
            C.forEach(B => {
                B.isDirectory && (R.push(B.path),
                B.children && O(B.children))
            }
            )
        }
        ;
        return O(T),
        R
    }
      , N = () => {
        const T = b(s);
        u(new Set(T))
    }
      , S = () => {
        u(new Set)
    }
      , E = T => {
        if (!T.children)
            return !1;
        for (const R of T.children)
            if (!R.isDirectory && l.includes(R.path) || R.isDirectory && E(R))
                return !0;
        return !1
    }
      , L = (T, R=0) => (p ? T.filter(C => C.isDirectory ? E(C) : l.includes(C.path)) : T).map(C => {
        const B = !C.isDirectory && h(C)
          , {Icon: se, activeColor: W} = g(C)
          , oe = W;
        return e.jsxs("div", {
            children: [e.jsxs("div", {
                className: V("flex items-center py-1 px-2 hover:bg-blue-50 rounded cursor-pointer whitespace-nowrap", r === C.path && !C.isDirectory && "bg-jar-50 text-jar-600"),
                style: {
                    paddingLeft: `${R * 1.25}rem`
                },
                onClick: () => C.isDirectory ? v(C.path, C) : a(C.path),
                children: [e.jsx("div", {
                    className: "w-5 flex-shrink-0 flex items-center justify-center",
                    children: C.isDirectory ? c.has(C.path) ? e.jsx(vt, {
                        className: "h-4 w-4"
                    }) : e.jsx(jt, {
                        className: "h-4 w-4"
                    }) : e.jsx("div", {
                        className: "w-4"
                    })
                }), e.jsx("div", {
                    className: "w-5 mr-1 flex-shrink-0",
                    children: e.jsx(se, {
                        size: 16,
                        className: C.isDirectory ? W : oe
                    })
                }), e.jsxs("span", {
                    className: V("text-sm truncate", n.has(C.path) && "font-medium", r === C.path && !C.isDirectory && "font-bold"),
                    children: [C.name, !C.isDirectory && B && e.jsx(_r, {
                        size: 12,
                        className: "inline ml-1 text-green-500"
                    }), n.has(C.path) && e.jsx("span", {
                        className: "ml-1 text-jar-500",
                        children: "*"
                    })]
                })]
            }), C.isDirectory && c.has(C.path) && C.children && e.jsx("div", {
                children: L(C.children, R + 1)
            })]
        }, C.path)
    }
    );
    return e.jsxs("div", {
        className: "border-r flex flex-col h-full",
        children: [e.jsxs("div", {
            className: "p-2 border-b",
            children: [e.jsx(Ln, {
                zipInstance: t,
                onSearch: o,
                onClearSearch: d
            }), e.jsxs("div", {
                className: "flex gap-1 mt-2",
                children: [e.jsxs("button", {
                    onClick: N,
                    className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-jar-600 hover:bg-jar-50 rounded transition-colors",
                    title: "Expand All",
                    children: [e.jsx(Tr, {
                        size: 14
                    }), e.jsx("span", {
                        children: "Expand All"
                    })]
                }), e.jsxs("button", {
                    onClick: S,
                    className: "flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-jar-600 hover:bg-jar-50 rounded transition-colors",
                    title: "Collapse All",
                    children: [e.jsx(Pr, {
                        size: 14
                    }), e.jsx("span", {
                        children: "Collapse All"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "flex-1 overflow-auto",
            children: e.jsx("div", {
                className: "p-2",
                children: s.length > 0 ? L(s) : e.jsx("p", {
                    className: "p-4 text-sm text-slate-500",
                    children: "Loading tree..."
                })
            })
        }), x && e.jsx("div", {
            className: "border-t p-1",
            children: e.jsxs("button", {
                onClick: x,
                className: "w-full flex items-center justify-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-jar-600 hover:bg-jar-50 rounded transition-colors",
                title: "Contact Support",
                children: [e.jsx(yt, {
                    size: 12
                }), "Support"]
            })
        })]
    })
}
  , Mn = (s, t=2) => {
    if (s === 0)
        return "0 Bytes";
    const r = 1024
      , n = t < 0 ? 0 : t
      , a = ["Bytes", "KB", "MB", "GB", "TB"]
      , o = Math.floor(Math.log(s) / Math.log(r));
    return parseFloat((s / Math.pow(r, o)).toFixed(n)) + " " + a[o]
}
  , De = ({zipInstance: s, filePath: t, fileName: r, fileSize: n, jarName: a, jarInstanceId: o, isMinecraftMod: d}) => {
    const [l,p] = i.useState(null)
      , [x,m] = i.useState(null)
      , [c] = i.useState( () => Fe())
      , u = i.useMemo( () => ({
        viewer: "image-viewer",
        filePath: t,
        fileType: (r == null ? void 0 : r.split(".").pop()) || "image",
        jarName: a,
        jarInstanceId: o
    }), [t, r, a, o]);
    i.useEffect( () => {
        let h = null;
        return (async () => {
            if (!s)
                return;
            const v = s.file(t);
            if (v) {
                const b = await v.async("blob");
                h = URL.createObjectURL(b),
                p(h)
            }
        }
        )(),
        m(null),
        () => {
            h && URL.revokeObjectURL(h)
        }
    }
    , [t, s]);
    const f = h => {
        const {naturalWidth: g, naturalHeight: v} = h.currentTarget;
        m({
            width: g,
            height: v
        })
    }
    ;
    return e.jsxs("div", {
        className: "flex flex-col h-full bg-gray-50",
        children: [e.jsx("div", {
            className: "flex-1 flex items-center justify-center w-full h-full overflow-hidden p-4",
            children: l && e.jsx("img", {
                src: l,
                alt: `Preview of ${r}`,
                className: "max-w-full max-h-full object-contain",
                onLoad: f
            })
        }), e.jsx("div", {
            className: "flex-shrink-0 w-full p-2 border-t text-xs text-gray-600",
            children: e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [e.jsx("p", {
                    className: "font-medium truncate",
                    title: r,
                    children: r
                }), e.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [x && e.jsxs("p", {
                        children: [x.width, " x ", x.height, " px"]
                    }), n > 0 && e.jsx("p", {
                        children: Mn(n)
                    })]
                })]
            })
        }), e.jsx(Pe, {
            adSlot: "1234567894",
            adFormat: "rectangle",
            campaign: c,
            context: u,
            variant: "small",
            isMinecraftMod: d,
            className: "flex-shrink-0 p-3 border-t bg-white"
        })]
    })
}
;
function Ss({open: s, onOpenChange: t, filename: r}) {
    const [n,a] = i.useState("")
      , [o,d] = i.useState(!1)
      , [l,p] = i.useState(!1)
      , [x,m] = i.useState("")
      , c = gs()
      , u = g => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)
      , f = async g => {
        if (g.preventDefault(),
        !n.trim()) {
            m("Email is required");
            return
        }
        if (!u(n)) {
            m("Please enter a valid email address");
            return
        }
        d(!0),
        m("");
        try {
            c == null || c.capture("make_readable_waitlist_joined", {
                email: n,
                email_domain: n.split("@")[1],
                filename: r || "unknown",
                timestamp: new Date().toISOString()
            }),
            p(!0)
        } catch (v) {
            console.error("Error tracking event:", v),
            m("Something went wrong. Please try again.")
        } finally {
            d(!1)
        }
    }
      , h = g => {
        g ? c == null || c.capture("make_readable_modal_opened", {
            filename: r || "unknown",
            timestamp: new Date().toISOString()
        }) : (c == null || c.capture("make_readable_modal_closed", {
            email_entered: n.length > 0,
            submitted: l,
            timestamp: new Date().toISOString()
        }),
        setTimeout( () => {
            a(""),
            p(!1),
            m(""),
            d(!1)
        }
        , 300)),
        t(g)
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: h,
        children: e.jsxs(ye, {
            className: "sm:max-w-lg",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(ms, {
                        className: "w-5 h-5 text-purple-600"
                    }), "Make Code More Readable"]
                }), e.jsx(Ne, {
                    className: "text-left",
                    children: e.jsx("span", {
                        children: "Transform cryptic variable names into meaningful, readable code automatically. This feature will also explain what the code does."
                    })
                })]
            }), l ? e.jsx("div", {
                className: "space-y-4",
                children: e.jsxs("div", {
                    className: "text-center py-6",
                    children: [e.jsxs("div", {
                        className: "text-purple-600 font-medium mb-3 flex items-center justify-center gap-2",
                        children: [e.jsx(gt, {
                            className: "w-6 h-6"
                        }), "✨ You're on the waitlist!"]
                    }), e.jsx("p", {
                        className: "text-gray-700 mb-4 leading-relaxed",
                        children: "Thanks for your interest! We'll notify you via email when the Make Readable feature is available."
                    }), e.jsx("p", {
                        className: "text-sm text-gray-500 mb-4",
                        children: "This feature will automatically analyze your decompiled code and suggest meaningful variable names to make it easier to understand."
                    }), e.jsx(_, {
                        variant: "outline",
                        onClick: () => h(!1),
                        className: "gap-2",
                        children: "Got it!"
                    })]
                })
            }) : e.jsxs("div", {
                className: "space-y-4",
                children: [e.jsxs("div", {
                    className: "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-4",
                    children: [e.jsxs("h4", {
                        className: "font-medium text-purple-900 mb-3 flex items-center gap-2",
                        children: [e.jsx($s, {
                            className: "w-4 h-4"
                        }), "See the transformation:"]
                    }), e.jsxs("div", {
                        className: "mb-3",
                        children: [e.jsx("p", {
                            className: "text-xs text-gray-600 mb-1",
                            children: "Before:"
                        }), e.jsxs("div", {
                            className: "bg-white border rounded p-2 font-mono text-sm text-gray-800",
                            children: [e.jsx("div", {
                                className: "text-red-600",
                                children: "int a = 1;"
                            }), e.jsx("div", {
                                className: "text-red-600",
                                children: 'String b = "user123";'
                            }), e.jsx("div", {
                                className: "text-red-600",
                                children: "boolean c = true;"
                            })]
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-xs text-gray-600 mb-1",
                            children: "After:"
                        }), e.jsxs("div", {
                            className: "bg-white border rounded p-2 font-mono text-sm text-gray-800",
                            children: [e.jsx("div", {
                                className: "text-green-600",
                                children: "int itemCount = 1;"
                            }), e.jsx("div", {
                                className: "text-green-600",
                                children: 'String userName = "user123";'
                            }), e.jsx("div", {
                                className: "text-green-600",
                                children: "boolean isActive = true;"
                            })]
                        })]
                    })]
                }), e.jsxs("form", {
                    onSubmit: f,
                    className: "space-y-4",
                    children: [e.jsxs("div", {
                        className: "space-y-2",
                        children: [e.jsx(ys, {
                            htmlFor: "email",
                            children: "Get notified when this feature is ready"
                        }), e.jsxs("div", {
                            className: "relative",
                            children: [e.jsx(Nt, {
                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                            }), e.jsx($e, {
                                id: "email",
                                type: "email",
                                placeholder: "your@email.com",
                                value: n,
                                onChange: g => {
                                    a(g.target.value),
                                    m("")
                                }
                                ,
                                className: "pl-10",
                                disabled: o,
                                required: !0
                            })]
                        }), e.jsx("p", {
                            className: "text-xs text-gray-500",
                            children: "We'll send you a notification when the Make Readable feature launches."
                        })]
                    }), x && e.jsx("p", {
                        className: "text-sm text-red-600",
                        children: x
                    }), e.jsxs(Ce, {
                        children: [e.jsx(_, {
                            type: "button",
                            variant: "outline",
                            onClick: () => h(!1),
                            disabled: o,
                            children: "Cancel"
                        }), e.jsx(_, {
                            type: "submit",
                            disabled: o,
                            className: "bg-purple-600 hover:bg-purple-700",
                            children: o ? e.jsxs(e.Fragment, {
                                children: [e.jsx(Fs, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }), "Joining..."]
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsx(ms, {
                                    className: "w-4 h-4 mr-2"
                                }), "Join Waitlist"]
                            })
                        })]
                    })]
                })]
            })]
        })
    })
}
const Zt = "jar_editor_feature_usage";
function Gt() {
    const s = new Date
      , t = s.getFullYear()
      , r = String(s.getMonth() + 1).padStart(2, "0")
      , n = String(s.getDate()).padStart(2, "0");
    return `${t}-${r}-${n}`
}
function Yt() {
    try {
        const s = localStorage.getItem(Zt);
        return s ? JSON.parse(s) : {}
    } catch (s) {
        return console.warn("Failed to load feature usage data:", s),
        {}
    }
}
function Un(s) {
    try {
        localStorage.setItem(Zt, JSON.stringify(s))
    } catch (t) {
        console.warn("Failed to save feature usage data:", t)
    }
}
function Xt(s) {
    const r = Yt()[s]
      , n = Gt();
    return !r || r.date !== n ? 0 : r.count
}
function ps(s, t) {
    const r = Xt(s);
    return Math.max(0, t - r)
}
function Be(s, t) {
    return ps(s, t) > 0
}
function Xe(s) {
    const t = Yt()
      , r = Gt();
    return !t[s] || t[s].date !== r ? t[s] = {
        count: 1,
        date: r
    } : t[s].count += 1,
    Un(t),
    t[s].count
}
function ts(s) {
    const t = {};
    return s.forEach(r => {
        const n = Xt(r.featureId)
          , a = ps(r.featureId, r.dailyLimit)
          , o = a > 0;
        t[r.featureId] = {
            used: n,
            remaining: a,
            canUse: o
        }
    }
    ),
    t
}
function Fn() {
    const s = new Date
      , r = new Date(s.getFullYear(),s.getMonth(),s.getDate() + 1,0,0,0,0).getTime() - s.getTime()
      , n = Math.floor(r / (1e3 * 60 * 60))
      , a = Math.floor(r % (1e3 * 60 * 60) / (1e3 * 60));
    return {
        hours: n,
        minutes: a
    }
}
function $n() {
    const {hours: s, minutes: t} = Fn();
    return s > 0 ? `${s}h ${t}m` : `${t}m`
}
const U = {
    JAR_EXPORT: {
        featureId: "jar_export",
        dailyLimit: 5,
        displayName: "JAR Export"
    },
    JSON_VALIDATE: {
        featureId: "json_validate",
        dailyLimit: 10,
        displayName: "JSON Validation"
    },
    JSON_FORMAT: {
        featureId: "json_format",
        dailyLimit: 10,
        displayName: "JSON Formatting"
    },
    JSON_MINIFY: {
        featureId: "json_minify",
        dailyLimit: 10,
        displayName: "JSON Minification"
    },
    JAVA_DECOMPILE: {
        featureId: "java_decompile",
        dailyLimit: 3,
        displayName: "Java Decompilation"
    },
    PROPERTIES_VALIDATE: {
        featureId: "properties_validate",
        dailyLimit: 5,
        displayName: "Properties Validation"
    },
    PROPERTIES_FORMAT: {
        featureId: "properties_format",
        dailyLimit: 5,
        displayName: "Properties Formatting"
    },
    PROPERTIES_EXPORT: {
        featureId: "properties_export",
        dailyLimit: 3,
        displayName: "Properties Export"
    },
    PROPERTIES_RENAME_KEY: {
        featureId: "properties_rename_key",
        dailyLimit: 1,
        displayName: "Key Renaming"
    },
    PROPERTIES_MOVE_PROPERTY: {
        featureId: "properties_move_property",
        dailyLimit: 1,
        displayName: "Property Moving"
    },
    PROPERTIES_GROUP_OPERATIONS: {
        featureId: "properties_group_ops",
        dailyLimit: 1,
        displayName: "Group Operations"
    }
}
  , zn = ({zipInstance: s, filePath: t, isSearchActive: r, highlightSearchMatches: n, onDecompileLimit: a, onDecompileSuccess: o, jarName: d, jarInstanceId: l, isMinecraftMod: p}) => {
    const {isProUser: x} = ke()
      , {getCachedDecompilation: m, setCachedDecompilation: c} = Kt()
      , [u,f] = i.useState(null)
      , [h,g] = i.useState(null)
      , [v,b] = i.useState(!1)
      , [N,S] = i.useState(null)
      , [E,L] = i.useState(!1)
      , [T] = i.useState( () => Fe())
      , [R,O] = i.useState(!1)
      , [C,B] = i.useState(!1)
      , se = i.useMemo( () => Math.random() < .5 ? "Explain" : "Make Readable", [])
      , W = i.useMemo( () => ({
        viewer: "class-viewer",
        filePath: t,
        fileType: ".class",
        jarName: d,
        jarInstanceId: l
    }), [t, d, l])
      , oe = i.useMemo( () => [{
        icon: e.jsx("span", {
            className: "mr-1",
            children: "💡"
        }),
        text: "Want to edit text values? Use the Strings button (top-left) to modify any text in this file",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
    }, {
        icon: e.jsx("span", {
            className: "mr-1",
            children: "💡"
        }),
        text: "Need to decompile individual .class files? Try our standalone Class Decompiler tool",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-700",
        borderColor: "border-indigo-200"
    }], [])
      , [Q] = i.useState( () => Math.floor(Math.random() * oe.length))
      , te = oe[Q];
    ps(U.JAVA_DECOMPILE.featureId, U.JAVA_DECOMPILE.dailyLimit);
    const le = U.JAVA_DECOMPILE.dailyLimit
      , re = i.useCallback(async () => {
        const ee = m(l, t);
        if (ee) {
            g(ee),
            S(null),
            O(!0);
            return
        }
        if (!x && !Be(U.JAVA_DECOMPILE.featureId, U.JAVA_DECOMPILE.dailyLimit)) {
            a(le);
            return
        }
        b(!0),
        g(null),
        S(null);
        try {
            if (!s)
                throw new Error("No ZIP instance available");
            const J = s.file(t);
            if (!J)
                throw new Error("Class file not found");
            const H = await J.async("arraybuffer")
              , z = await fetch(xs("/api/decompile"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/octet-stream",
                    "X-User-Pro": x ? "true" : "false"
                },
                body: H
            });
            if (!z.ok) {
                const q = await z.json().catch( () => ({}));
                throw new Error(q.error || `Server error: ${z.status}`)
            }
            const Y = await z.json();
            if (!Y.success)
                throw new Error(Y.error || "Failed to decompile class file");
            c(l, t, Y.source),
            g(Y.source),
            O(!0),
            x || Xe(U.JAVA_DECOMPILE.featureId);
            const G = ps(U.JAVA_DECOMPILE.featureId, U.JAVA_DECOMPILE.dailyLimit);
            o(G, le)
        } catch (J) {
            const H = J instanceof Error ? J.message : "Unknown error";
            H.includes("limit reached") || S(H)
        } finally {
            b(!1)
        }
    }
    , [t, s, x, le, a, o, l, m, c]);
    i.useEffect( () => {
        const ee = m(l, t);
        ee ? (g(ee),
        S(null),
        O(!0)) : (g(null),
        S(null),
        O(!1)),
        (async () => {
            if (!s)
                return;
            const H = s.file(t);
            if (H) {
                const Y = (await H.async("string")).replace(/[^\x20-\x7E]/g, ".");
                f(Y)
            }
        }
        )()
    }
    , [t, s, l, m]),
    i.useEffect( () => {
        u && (v || h || x && re())
    }
    , [u, x, v, h, re]);
    const pe = ee => {
        navigator.clipboard.writeText(ee),
        L(!0),
        setTimeout( () => L(!1), 2e3)
    }
      , me = () => e.jsxs("div", {
        className: "flex justify-between items-center p-2 border-b bg-gray-50 flex-shrink-0",
        children: [e.jsxs("div", {
            className: `hidden md:flex text-xs px-2 py-1 rounded border ${te.bgColor} ${te.textColor} ${te.borderColor} items-center`,
            children: [te.icon, te.text === "Need to decompile individual .class files? Try our standalone Class Decompiler tool" ? e.jsxs(e.Fragment, {
                children: ["Need to decompile individual .class files?", " ", e.jsx("a", {
                    href: "/class-decompiler",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-bold text-indigo-700 hover:text-indigo-900 hover:underline bg-indigo-100 px-1 py-0.5 rounded",
                    children: "Try our standalone Class Decompiler tool"
                })]
            }) : te.text === "Want to edit text values? Use the Strings button (top-left) to modify any text in this file" ? e.jsxs(e.Fragment, {
                children: ["Want to edit text values? Use the ", e.jsx("span", {
                    className: "font-semibold",
                    children: "Strings"
                }), " button (top-left) to modify any text in this file"]
            }) : te.text]
        }), e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [h && e.jsxs(_, {
                variant: "outline",
                size: "sm",
                onClick: () => B(!0),
                className: "h-7 px-2 text-xs bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 text-purple-800 hover:from-purple-200 hover:to-pink-200 font-semibold",
                children: [e.jsx(ms, {
                    size: 12,
                    className: "mr-1"
                }), "✨ ", se]
            }), e.jsx(_, {
                variant: "outline",
                size: "sm",
                onClick: re,
                disabled: v,
                className: `h-7 px-2 text-xs font-normal border-2 shadow-md ${R ? "border-green-500 text-white bg-green-500" : "border-blue-500 text-white bg-blue-500"}`,
                children: v ? e.jsxs(e.Fragment, {
                    children: [e.jsx(Ts, {
                        size: 14,
                        className: "mr-1 animate-spin"
                    }), "Decompiling..."]
                }) : R ? e.jsxs(e.Fragment, {
                    children: [e.jsx($s, {
                        size: 14,
                        className: "mr-1"
                    }), "Decompiled"]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(wt, {
                        size: 14,
                        className: "mr-1"
                    }), "Decompile"]
                })
            })]
        })]
    });
    return v ? e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [me(), e.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center",
            children: [e.jsxs("div", {
                className: "relative animate-spin h-16 w-16 mb-4",
                children: [e.jsx("div", {
                    className: "absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-purple-300 border-b-purple-200 border-l-purple-400"
                }), e.jsx("div", {
                    className: "absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-transparent animate-ping opacity-30"
                })]
            }), e.jsx("h3", {
                className: "text-lg font-medium text-gray-700 mb-2",
                children: "Decompiling Java Code"
            }), e.jsx("p", {
                className: "text-gray-500 text-center max-w-md",
                children: "Converting bytecode to readable Java source code. This may take a few moments..."
            }), e.jsxs("div", {
                className: "mt-4 flex space-x-1",
                children: [e.jsx("span", {
                    className: "h-2 w-2 bg-purple-500 rounded-full animate-bounce",
                    style: {
                        animationDelay: "0ms"
                    }
                }), e.jsx("span", {
                    className: "h-2 w-2 bg-purple-500 rounded-full animate-bounce",
                    style: {
                        animationDelay: "150ms"
                    }
                }), e.jsx("span", {
                    className: "h-2 w-2 bg-purple-500 rounded-full animate-bounce",
                    style: {
                        animationDelay: "300ms"
                    }
                })]
            })]
        })]
    }) : N ? e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [me(), e.jsxs("div", {
            className: "flex-1 p-6 bg-red-50 border border-red-200 rounded-md text-red-600 flex flex-col items-center justify-center h-full",
            children: [e.jsx("div", {
                className: "bg-red-100 rounded-full p-3 mb-4",
                children: e.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-red-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), e.jsx("h3", {
                className: "font-medium text-lg mb-2",
                children: "Decompilation Error"
            }), e.jsx("p", {
                className: "text-center mb-4 max-w-md",
                children: N
            }), e.jsxs(_, {
                variant: "outline",
                size: "sm",
                className: "border-red-300 text-red-600 hover:bg-red-50",
                onClick: re,
                children: [e.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-4 w-4 mr-1",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    })
                }), "Retry Decompilation"]
            })]
        }), e.jsx(Ss, {
            open: C,
            onOpenChange: B,
            filename: t
        })]
    }) : h ? e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [me(), e.jsxs("div", {
            className: "flex-1 relative h-full overflow-auto",
            children: [e.jsx("div", {
                className: "absolute top-2 right-2 z-10 p-4",
                children: e.jsx(zs, {
                    delayDuration: 100,
                    children: e.jsxs(fs, {
                        children: [e.jsx(hs, {
                            asChild: !0,
                            children: e.jsx(_, {
                                variant: "outline",
                                size: "sm",
                                className: "h-8 w-8 p-0 bg-white/80 hover:bg-white",
                                onClick: () => pe(h),
                                children: E ? e.jsx(Se, {
                                    size: 16,
                                    className: "text-green-500"
                                }) : e.jsx($r, {
                                    size: 16
                                })
                            })
                        }), e.jsx(Qe, {
                            children: e.jsx("p", {
                                children: E ? "Copied!" : "Copy code"
                            })
                        })]
                    })
                })
            }), e.jsx("div", {
                className: "rounded-md border overflow-hidden",
                children: e.jsx(bs, {
                    language: "java",
                    style: dn,
                    customStyle: {
                        margin: 0,
                        padding: "1rem",
                        borderRadius: "0.375rem",
                        height: "100%",
                        fontSize: "0.875rem",
                        lineHeight: "1.5"
                    },
                    showLineNumbers: !0,
                    wrapLines: !0,
                    wrapLongLines: !0,
                    children: h
                })
            })]
        }), e.jsx("div", {
            className: "flex-shrink-0 p-2 border-t bg-gray-50",
            children: e.jsx(Pe, {
                adSlot: "1234567892",
                adFormat: "auto",
                campaign: T,
                context: W,
                variant: "minimal",
                isMinecraftMod: p
            })
        }), e.jsx(Ss, {
            open: C,
            onOpenChange: B,
            filename: t
        })]
    }) : e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [me(), e.jsx("div", {
            className: "flex-1 p-4 flex flex-col h-full",
            children: r ? e.jsx("div", {
                className: "font-mono text-sm flex-1 whitespace-pre-wrap overflow-auto",
                children: n(u || "")
            }) : e.jsx(Le, {
                className: "w-full flex-1 h-full font-mono text-sm resize-none border rounded-md p-2 bg-gray-50",
                value: u || "[Binary class file content (not displayed)]",
                readOnly: !0,
                style: {
                    overflow: "auto"
                },
                spellCheck: !1
            })
        }), e.jsx("div", {
            className: "flex-shrink-0 p-2 border-t bg-gray-50",
            children: e.jsx(Pe, {
                adSlot: "1234567892",
                adFormat: "auto",
                campaign: T,
                context: W,
                variant: "minimal",
                isMinecraftMod: p
            })
        }), e.jsx(Ss, {
            open: C,
            onOpenChange: B,
            filename: t
        })]
    })
}
  , ls = ({content: s, onContentChange: t, isSearchActive: r, highlightSearchMatches: n, className: a, filePath: o, fileName: d, jarName: l, jarInstanceId: p, isMinecraftMod: x, isReadOnly: m=!1}) => {
    var pe, me, ee;
    const {isProUser: c} = ke()
      , [u,f] = i.useState(null)
      , [h,g] = i.useState(!0)
      , [v,b] = i.useState(!1)
      , [N,S] = i.useState(!1)
      , [E,L] = i.useState("")
      , [T,R] = i.useState({})
      , [O] = i.useState( () => Fe())
      , C = i.useRef(null)
      , B = i.useMemo( () => ({
        viewer: "json-viewer",
        filePath: o,
        fileType: ".json",
        jarName: l,
        jarInstanceId: p
    }), [o, l, p]);
    if (Te.useEffect( () => {
        f(null)
    }
    , [s]),
    i.useEffect( () => {
        const J = () => {
            const z = ts([U.JSON_VALIDATE, U.JSON_FORMAT, U.JSON_MINIFY]);
            R(z)
        }
        ;
        J();
        const H = setInterval(J, 6e4);
        return () => clearInterval(H)
    }
    , []),
    Te.useEffect( () => {
        r && g(!0)
    }
    , [r]),
    m)
        return e.jsxs("div", {
            className: V("flex-1 flex flex-col h-full", a),
            children: [e.jsx("div", {
                className: "flex-1 p-4 flex flex-col",
                children: r ? e.jsx("div", {
                    className: "flex-1 font-mono text-sm whitespace-pre-wrap overflow-auto border rounded-md p-2 bg-gray-50",
                    children: n(s)
                }) : e.jsx(Le, {
                    className: "w-full flex-1 font-mono text-sm resize-none border rounded-md p-2 bg-gray-100 cursor-not-allowed focus-visible:ring-1 focus-visible:ring-ring",
                    value: s,
                    readOnly: !0,
                    style: {
                        overflow: "auto"
                    },
                    spellCheck: !1,
                    title: "Editing disabled - daily upload limit reached"
                })
            }), e.jsx("div", {
                className: "flex-shrink-0 p-2 border-t bg-gray-50",
                children: e.jsx(Pe, {
                    adSlot: "1234567891",
                    adFormat: "auto",
                    campaign: O,
                    context: B,
                    variant: "minimal",
                    isMinecraftMod: x
                })
            })]
        });
    const se = J => {
        t(J.target.value),
        f(null)
    }
      , W = () => {
        g(!1),
        setTimeout( () => {
            C.current && C.current.focus()
        }
        , 0)
    }
      , oe = (J, H) => {
        const z = [/at position (\d+)/, /position (\d+)/, /at character (\d+)/, /character (\d+)/, /line (\d+) column (\d+)/, /line (\d+).*column (\d+)/];
        for (const Y of z) {
            const G = Y.exec(J);
            if (G) {
                if (G.length === 2)
                    return parseInt(G[1], 10);
                if (G.length === 3) {
                    const q = parseInt(G[1], 10)
                      , Z = parseInt(G[2], 10)
                      , de = H.split(`
`);
                    let ae = 0;
                    for (let fe = 0; fe < q - 1 && fe < de.length; fe++)
                        ae += de[fe].length + 1;
                    return ae + Z - 1
                }
            }
        }
        return null
    }
      , Q = () => {
        if (!c && !Be(U.JSON_VALIDATE.featureId, U.JSON_VALIDATE.dailyLimit)) {
            L(U.JSON_VALIDATE.displayName),
            S(!0);
            return
        }
        try {
            const J = JSON.parse(s);
            let H = "Valid JSON";
            const z = [];
            if (c) {
                const Y = te(s);
                Y.length > 0 && z.push(`Warning: Duplicate keys found: ${Y.join(", ")}`),
                z.length > 0 && (H += " | " + z.join(" | "))
            }
            if (f({
                type: "success",
                message: H
            }),
            !c) {
                Xe(U.JSON_VALIDATE.featureId);
                const Y = ts([U.JSON_VALIDATE, U.JSON_FORMAT, U.JSON_MINIFY]);
                R(Y)
            }
        } catch (J) {
            let H = "Invalid JSON";
            if (J instanceof SyntaxError) {
                const z = oe(J.message, s);
                if (z !== null && z >= 0) {
                    const G = s.substring(0, z).split(`
`).length;
                    let q = s.lastIndexOf(`
`, z - 1);
                    q = q === -1 ? 0 : q + 1;
                    let Z = s.indexOf(`
`, z);
                    Z === -1 && (Z = s.length),
                    H = `Invalid JSON at line ${G}: ${J.message}`,
                    C.current && (C.current.focus(),
                    C.current.setSelectionRange(q, Z))
                } else
                    H = `Invalid JSON: ${J.message}`
            } else
                H = `Validation error: ${Jinstanceof Error ? J.message : "Unknown error"}`;
            f({
                type: "error",
                message: H
            })
        }
    }
      , te = J => {
        try {
            const H = []
              , z = new Map
              , Y = /"([^"]+)"\s*:/g;
            let G;
            for (; (G = Y.exec(J)) !== null; ) {
                const q = G[1];
                z.set(q, (z.get(q) || 0) + 1)
            }
            for (const [q,Z] of z.entries())
                Z > 1 && H.push(q);
            return H
        } catch {
            return []
        }
    }
      , le = () => {
        try {
            const J = JSON.parse(s)
              , H = JSON.stringify(J, null, 2);
            if (t(H),
            f({
                type: "success",
                message: "JSON formatted successfully"
            }),
            !c) {
                Xe(U.JSON_FORMAT.featureId);
                const z = ts([U.JSON_VALIDATE, U.JSON_FORMAT, U.JSON_MINIFY]);
                R(z)
            }
        } catch {
            f({
                type: "error",
                message: "Cannot format invalid JSON"
            })
        }
    }
      , re = () => {
        try {
            const J = JSON.parse(s)
              , H = JSON.stringify(J);
            if (t(H),
            f({
                type: "success",
                message: "JSON minified successfully"
            }),
            !c) {
                Xe(U.JSON_MINIFY.featureId);
                const z = ts([U.JSON_VALIDATE, U.JSON_FORMAT, U.JSON_MINIFY]);
                R(z)
            }
        } catch {
            f({
                type: "error",
                message: "Cannot minify invalid JSON"
            })
        }
    }
    ;
    return e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [e.jsxs("div", {
            className: "flex justify-between items-center p-2 border-b bg-gray-50 flex-shrink-0",
            children: [e.jsx("div", {
                className: "flex items-center space-x-2",
                children: u && e.jsx("p", {
                    className: V("text-xs", u.type === "success" ? "text-green-600" : "text-red-500"),
                    children: u.message
                })
            }), e.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [e.jsx(_, {
                    variant: "outline",
                    size: "sm",
                    onClick: Q,
                    className: "h-7 px-2 text-xs",
                    title: "Validate JSON",
                    children: "Validate JSON"
                }), e.jsxs(_, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                        if (c)
                            le();
                        else {
                            if (!Be(U.JSON_FORMAT.featureId, U.JSON_FORMAT.dailyLimit)) {
                                L(U.JSON_FORMAT.displayName),
                                S(!0);
                                return
                            }
                            le()
                        }
                    }
                    ,
                    className: "h-7 px-2 text-xs",
                    title: c ? "Format JSON" : "Format JSON (10 free uses per day)",
                    children: [e.jsx(Is, {
                        size: 12,
                        className: "mr-1"
                    }), "Format"]
                }), e.jsxs(_, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                        if (c)
                            re();
                        else {
                            if (!Be(U.JSON_MINIFY.featureId, U.JSON_MINIFY.dailyLimit)) {
                                L(U.JSON_MINIFY.displayName),
                                S(!0);
                                return
                            }
                            re()
                        }
                    }
                    ,
                    className: "h-7 px-2 text-xs",
                    title: c ? "Minify JSON" : "Minify JSON (10 free uses per day)",
                    children: [e.jsx(us, {
                        size: 12,
                        className: "mr-1"
                    }), "Minify"]
                })]
            })]
        }), e.jsx("div", {
            className: "flex-1 p-4 flex flex-col",
            children: r && h ? e.jsx("div", {
                className: "flex-1 font-mono text-sm whitespace-pre-wrap overflow-auto cursor-pointer border rounded-md p-2 bg-gray-50 hover:bg-gray-100 transition-colors",
                onClick: W,
                title: "Click to edit this JSON file",
                children: n(s)
            }) : e.jsx(Le, {
                ref: C,
                className: "w-full flex-1 font-mono text-sm resize-none border rounded-md p-2 bg-blue-50 focus-visible:ring-1 focus-visible:ring-ring",
                value: s,
                onChange: se,
                style: {
                    overflow: "auto"
                },
                spellCheck: !1
            })
        }), e.jsx("div", {
            className: "flex-shrink-0 p-2 border-t bg-gray-50",
            children: e.jsx(Pe, {
                adSlot: "1234567891",
                adFormat: "auto",
                campaign: O,
                context: B,
                variant: "minimal",
                isMinecraftMod: x
            })
        }), v && e.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
            children: e.jsxs("div", {
                className: "bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl",
                children: [e.jsxs("div", {
                    className: "flex items-center mb-4",
                    children: [e.jsx(be, {
                        className: "h-6 w-6 text-yellow-500 mr-2"
                    }), e.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Unlock Advanced JSON Features"
                    })]
                }), e.jsxs("div", {
                    className: "space-y-3 mb-6",
                    children: [e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "h-4 w-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Auto-formatting & Minification"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "h-4 w-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Duplicate Key Detection"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "h-4 w-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Advanced Error Analysis"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "h-4 w-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Unlimited Java Decompilation"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-lg mb-4",
                    children: e.jsxs("div", {
                        className: "text-center",
                        children: [e.jsx("div", {
                            className: "text-sm font-medium",
                            children: "Limited Time Offer"
                        }), e.jsx("div", {
                            className: "text-lg font-bold",
                            children: "Only $0.99/month"
                        }), e.jsx("div", {
                            className: "text-xs opacity-90",
                            children: "was $11.99/month"
                        })]
                    })
                }), e.jsxs("div", {
                    className: "flex space-x-3",
                    children: [e.jsx(_, {
                        variant: "outline",
                        onClick: () => b(!1),
                        className: "flex-1",
                        children: "Maybe Later"
                    }), e.jsx(_, {
                        onClick: () => {
                            window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                            b(!1)
                        }
                        ,
                        className: "flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600",
                        children: "Upgrade Now"
                    })]
                })]
            })
        }), e.jsx(we, {
            open: N,
            onOpenChange: S,
            children: e.jsxs(ye, {
                className: "sm:max-w-md",
                children: [e.jsxs(ve, {
                    children: [e.jsxs(je, {
                        className: "flex items-center gap-2",
                        children: [e.jsx(be, {
                            className: "h-5 w-5 text-yellow-500"
                        }), e.jsxs("span", {
                            children: ["Daily ", E, " Limit Reached"]
                        })]
                    }), e.jsxs(Ne, {
                        children: ["You've used all 10 of your free ", E.toLowerCase(), " operations for today."]
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col space-y-4 py-4",
                    children: [e.jsxs("div", {
                        className: "bg-purple-50 p-4 rounded-md",
                        children: [e.jsx("h4", {
                            className: "font-medium text-purple-800 mb-2",
                            children: "Upgrade to Pro for unlimited JSON features"
                        }), e.jsx("p", {
                            className: "text-sm text-purple-600",
                            children: "Pro gives you unlimited access to all JSON operations, Java decompilation, and premium features."
                        })]
                    }), e.jsxs("div", {
                        className: "bg-blue-50 border border-blue-100 rounded-md p-3 flex items-center",
                        children: [e.jsx(He, {
                            className: "h-4 w-4 text-blue-500 mr-2 flex-shrink-0"
                        }), e.jsxs("p", {
                            className: "text-sm text-blue-700",
                            children: ["Free tier limit resets in: ", e.jsx("span", {
                                className: "font-medium",
                                children: $n()
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "bg-gray-50 p-3 rounded-md border border-gray-200",
                        children: [e.jsx("h4", {
                            className: "font-medium text-gray-800 mb-2 text-sm",
                            children: "Today's Usage Summary:"
                        }), e.jsxs("div", {
                            className: "space-y-1 text-xs text-gray-600",
                            children: [e.jsxs("div", {
                                className: "flex justify-between",
                                children: [e.jsx("span", {
                                    children: "• JSON Validation"
                                }), e.jsxs("span", {
                                    className: "font-mono",
                                    children: [10 - (((pe = T[U.JSON_VALIDATE.featureId]) == null ? void 0 : pe.remaining) || 0), "/10"]
                                })]
                            }), e.jsxs("div", {
                                className: "flex justify-between",
                                children: [e.jsx("span", {
                                    children: "• JSON Formatting"
                                }), e.jsxs("span", {
                                    className: "font-mono",
                                    children: [10 - (((me = T[U.JSON_FORMAT.featureId]) == null ? void 0 : me.remaining) || 0), "/10"]
                                })]
                            }), e.jsxs("div", {
                                className: "flex justify-between",
                                children: [e.jsx("span", {
                                    children: "• JSON Minification"
                                }), e.jsxs("span", {
                                    className: "font-mono",
                                    children: [10 - (((ee = T[U.JSON_MINIFY.featureId]) == null ? void 0 : ee.remaining) || 0), "/10"]
                                })]
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "bg-amber-50 p-3 rounded-md border border-amber-200",
                        children: e.jsxs("p", {
                            className: "text-amber-800 text-xs",
                            children: ["💎 ", e.jsx("strong", {
                                children: "Pro users"
                            }), " never see this limit modal and have unlimited JSON operations."]
                        })
                    })]
                }), e.jsxs(Ce, {
                    className: "sm:justify-between",
                    children: [e.jsx(_, {
                        variant: "outline",
                        onClick: () => S(!1),
                        children: "Maybe Later"
                    }), e.jsxs(_, {
                        onClick: () => {
                            window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                            S(!1)
                        }
                        ,
                        className: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
                        children: [e.jsx(be, {
                            className: "mr-2 h-4 w-4"
                        }), "Upgrade to Pro"]
                    })]
                })]
            })
        })]
    })
}
  , Rs = i.forwardRef( ({className: s, ...t}, r) => e.jsx(St, {
    className: V("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", s),
    ...t,
    ref: r,
    children: e.jsx(zr, {
        className: V("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    })
}));
Rs.displayName = St.displayName;
const Jn = Br
  , Vn = Wr
  , Bn = i.forwardRef( ({className: s, inset: t, children: r, ...n}, a) => e.jsxs(Ct, {
    ref: a,
    className: V("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", s),
    ...n,
    children: [r, e.jsx(jt, {
        className: "ml-auto h-4 w-4"
    })]
}));
Bn.displayName = Ct.displayName;
const Wn = i.forwardRef( ({className: s, ...t}, r) => e.jsx(kt, {
    ref: r,
    className: V("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
    ...t
}));
Wn.displayName = kt.displayName;
const Ds = i.forwardRef( ({className: s, sideOffset: t=4, ...r}, n) => e.jsx(Jr, {
    children: e.jsx(Et, {
        ref: n,
        sideOffset: t,
        className: V("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
        ...r
    })
}));
Ds.displayName = Et.displayName;
const Ls = i.forwardRef( ({className: s, inset: t, ...r}, n) => e.jsx(At, {
    ref: n,
    className: V("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", s),
    ...r
}));
Ls.displayName = At.displayName;
const Hn = i.forwardRef( ({className: s, children: t, checked: r, ...n}, a) => e.jsxs(It, {
    ref: a,
    className: V("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
    checked: r,
    ...n,
    children: [e.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Tt, {
            children: e.jsx(Se, {
                className: "h-4 w-4"
            })
        })
    }), t]
}));
Hn.displayName = It.displayName;
const Kn = i.forwardRef( ({className: s, children: t, ...r}, n) => e.jsxs(Pt, {
    ref: n,
    className: V("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
    ...r,
    children: [e.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Tt, {
            children: e.jsx(Vr, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), t]
}));
Kn.displayName = Pt.displayName;
const Zn = i.forwardRef( ({className: s, inset: t, ...r}, n) => e.jsx(_t, {
    ref: n,
    className: V("px-2 py-1.5 text-sm font-semibold", t && "pl-8", s),
    ...r
}));
Zn.displayName = _t.displayName;
const Gn = i.forwardRef( ({className: s, ...t}, r) => e.jsx(Rt, {
    ref: r,
    className: V("-mx-1 my-1 h-px bg-muted", s),
    ...t
}));
Gn.displayName = Rt.displayName;
const Yn = s => i.useCallback( (t, r) => {
    s.executeWithFeatureGate(t, () => {
        r(),
        s.trackUsageIfNeeded(t)
    }
    )
}
, [s])
  , qs = {
    raw: {
        extension: "properties",
        mimeType: "text/plain"
    },
    utf8: {
        extension: "utf8.properties",
        mimeType: "text/plain"
    },
    iso: {
        extension: "properties",
        mimeType: "text/plain"
    },
    json: {
        extension: "json",
        mimeType: "application/json"
    },
    yaml: {
        extension: "yaml",
        mimeType: "text/yaml"
    },
    env: {
        extension: "env",
        mimeType: "text/plain"
    }
}
  , Xn = s => s.replace(/\r\n?/g, `
`)
  , qn = s => {
    let t = s.length - 1;
    for (; t >= 0 && (s[t] === " " || s[t] === "	"); )
        t--;
    let r = 0;
    for (; t >= 0 && s[t] === "\\"; )
        r++,
        t--;
    return r
}
  , Js = s => qn(s) % 2 === 1
  , Qn = (s, t) => t && Js(s)
  , ea = /^[0-9a-fA-F]$/
  , Qs = s => {
    let t = "";
    for (let r = 0; r < s.length; r++) {
        const n = s[r];
        if (n !== "\\") {
            t += n;
            continue
        }
        if (++r >= s.length) {
            t += "\\";
            break
        }
        const a = s[r];
        switch (a) {
        case "t":
            t += "	";
            break;
        case "n":
            t += `
`;
            break;
        case "r":
            t += "\r";
            break;
        case "f":
            t += "\f";
            break;
        case "\\":
            t += "\\";
            break;
        case " ":
            t += " ";
            break;
        case ":":
            t += ":";
            break;
        case "=":
            t += "=";
            break;
        case "#":
            t += "#";
            break;
        case "!":
            t += "!";
            break;
        case "u":
            {
                let o = 0
                  , d = !0;
                for (let l = 0; l < 4; l++) {
                    const p = s[++r];
                    if (!p || !ea.test(p)) {
                        d = !1;
                        break
                    }
                    o = o << 4 | parseInt(p, 16)
                }
                if (d)
                    t += String.fromCharCode(o);
                else {
                    const l = s.slice(r - (d ? 3 : 4));
                    t += l
                }
                break
            }
        default:
            t += a
        }
    }
    return t
}
  , et = (s, {escapeLeadingSpace: t=!1, forKey: r=!1, targetEncoding: n}={}) => {
    let a = "";
    for (let o = 0; o < s.length; o++) {
        const d = s[o]
          , l = d.charCodeAt(0);
        if (n === "ISO-8859-1" && l > 255) {
            a += `\\u${l.toString(16).padStart(4, "0")}`;
            continue
        }
        switch (d) {
        case "\\":
            a += "\\\\";
            break;
        case "	":
            a += "\\t";
            break;
        case `
`:
            a += "\\n";
            break;
        case "\r":
            a += "\\r";
            break;
        case "\f":
            a += "\\f";
            break;
        case "=":
        case ":":
            a += `\\${d}`;
            break;
        case "#":
        case "!":
            a += `\\${d}`;
            break;
        case " ":
            {
                o === 0 && (t || r) ? a += "\\ " : a += " ";
                break
            }
        default:
            l < 32 || l === 127 ? a += `\\u${l.toString(16).padStart(4, "0")}` : a += d
        }
    }
    return a
}
  , sa = s => {
    for (let t = 0; t < s.length; t++)
        if (s.charCodeAt(t) > 255)
            return !0;
    return !1
}
  , ta = s => /\\u[0-9a-fA-F]{4}/.test(s)
  , ra = s => {
    const t = s.trimStart();
    return t === "" || t.startsWith("#") || t.startsWith("!")
}
;
function st(s, t) {
    const r = []
      , n = [];
    if (!s.trim())
        return {
            entries: n,
            markers: r
        };
    const a = Xn(s).split(`
`)
      , o = []
      , d = a.length;
    let l = 0;
    for (; l < d; ) {
        const m = a[l]
          , c = l + 1;
        if (ra(m)) {
            o.push(m),
            l++;
            continue
        }
        const u = c;
        let f = m
          , h = m;
        for (; Js(h) && l + 1 < d; ) {
            const O = h.search(/\\\s*$/);
            O === -1 || h.slice(0, O),
            f = f.replace(/\\\s*$/, ""),
            l++;
            const C = a[l];
            f += `
` + C,
            h = C
        }
        const g = l + 1
          , v = na(a, u - 1, g - 1)
          , {rawKey: b, rawValue: N, separator: S, inlineComment: E, parseError: L} = aa(v);
        let T = ""
          , R = "";
        L && r.push({
            line: u,
            message: L,
            severity: "error"
        }),
        b !== void 0 && (T = Qs(b)),
        N !== void 0 && (R = Qs(N)),
        n.push({
            key: T,
            value: R,
            startLine: u,
            endLine: g,
            raw: f,
            rawKey: b,
            rawValue: N,
            separator: S,
            inlineComment: E,
            leadingComments: o.splice(0),
            multiline: g > u,
            isComment: !1,
            parseError: L
        }),
        l++
    }
    for (; o.length; ) {
        const m = o.shift()
          , c = d - o.length;
        n.push({
            key: "",
            value: "",
            startLine: c,
            endLine: c,
            raw: m,
            isComment: !0,
            leadingComments: [],
            multiline: !1
        })
    }
    const p = oa(n);
    r.push(...p);
    const x = ia(a);
    return r.push(...x),
    t && r.push(...la(s, t, a)),
    {
        entries: n,
        markers: r
    }
}
function na(s, t, r) {
    let n = "";
    for (let a = t; a <= r; a++) {
        let o = s[a];
        a > t && (o = o.replace(/^\s+/, "")),
        a < r && Js(o) && (o = o.replace(/(\\+)\s*$/, (d, l) => l.slice(0, l.length - 1))),
        n += o
    }
    return n
}
function aa(s) {
    let t = 0;
    const r = s.length
      , n = t;
    for (; t < r && /[ \t\f]/.test(s[t]); )
        t++;
    const a = t
      , o = t > n;
    let d = -1, l, p = !1, x = -1;
    for (; t < r; t++) {
        const g = s[t];
        if (p) {
            p = !1;
            continue
        }
        if (g === "\\") {
            p = !0;
            continue
        }
        if (g === "=" || g === ":") {
            d = t,
            l = g;
            break
        }
        /\s/.test(g) && x === -1 && (x = t)
    }
    if (d === -1 && x !== -1 && (d = x,
    l = " "),
    o && l === " ")
        return {
            rawKey: "",
            rawValue: s.trim(),
            separator: " ",
            parseError: "Empty property key."
        };
    if (d === -1)
        return {
            rawKey: s.slice(a),
            rawValue: "",
            separator: void 0,
            parseError: "Property line missing separator (=, :, or whitespace)."
        };
    let m = s.slice(a, d);
    if ((l === "=" || l === ":") && (m = m.trimEnd()),
    a === 0 && d === 0)
        return {
            rawKey: "",
            rawValue: "",
            separator: void 0,
            parseError: "Empty property key."
        };
    if (a > 0 && d === a)
        return {
            rawKey: "",
            rawValue: "",
            separator: void 0,
            parseError: "Empty property key."
        };
    if (m.trim() === "")
        return {
            rawKey: "",
            rawValue: "",
            separator: void 0,
            parseError: "Empty property key."
        };
    if (l === " " && s.trim().split(/\s+/).length > 2 && !m.includes(".") && !m.includes("_"))
        return {
            rawKey: m,
            rawValue: "",
            separator: void 0,
            parseError: "Property line missing separator (=, :, or whitespace)."
        };
    let c = d;
    if (l === " ")
        for (; c < r && /\s/.test(s[c]); )
            c++;
    else
        for (c++; c < r && /[ \t\f]/.test(s[c]); )
            c++;
    let u, f = r;
    p = !1;
    for (let g = c; g < r; g++) {
        const v = s[g];
        if (p) {
            p = !1;
            continue
        }
        if (v === "\\") {
            p = !0;
            continue
        }
        if ((v === "#" || v === "!") && (g === c || /\s/.test(s[g - 1]))) {
            f = g,
            u = s.slice(g);
            break
        }
    }
    const h = s.slice(c, f).replace(/\s+$/, "");
    return {
        rawKey: m,
        rawValue: h,
        separator: l,
        inlineComment: u
    }
}
function ia(s) {
    const t = [];
    for (let r = 0; r < s.length; r++) {
        const n = s[r]
          , a = r === s.length - 1;
        Qn(n, a) && t.push({
            line: r + 1,
            message: "Line ends with continuation backslash but file ended.",
            severity: "error"
        })
    }
    return t
}
function oa(s) {
    const t = new Map;
    for (const n of s) {
        if (n.isComment || !n.key)
            continue;
        const a = t.get(n.key) || [];
        a.push(n),
        t.set(n.key, a)
    }
    const r = [];
    for (const [n,a] of t) {
        if (a.length < 2)
            continue;
        const o = a.map(l => `line ${l.startLine}`).join(", ")
          , d = `Duplicate key "${n}" found at: ${o}`;
        for (const l of a)
            r.push({
                line: l.startLine,
                message: d,
                severity: "warning"
            })
    }
    return r
}
function la(s, t, r) {
    const n = [];
    return t === "ISO-8859-1" ? r.forEach( (a, o) => {
        sa(a) && n.push({
            line: o + 1,
            message: "Characters outside ISO-8859-1; use \\uXXXX escapes or UTF-8 mode.",
            severity: "error"
        })
    }
    ) : r.forEach( (a, o) => {
        ta(a) && n.push({
            line: o + 1,
            message: "Unicode escape sequence detected; in UTF-8 mode you can use characters directly.",
            severity: "warning"
        })
    }
    ),
    n
}
function ca(s, t={}) {
    const {encoding: r="UTF-8", lineLimit: n=120, sortKeys: a=!1, dedupe: o=!1, separator: d} = t
      , l = []
      , p = new Set;
    for (const f of s) {
        if (f.parseError) {
            f.raw !== void 0 && l.push({
                ...f,
                isComment: !0,
                key: "",
                value: "",
                isInvalidProperty: !0
            });
            continue
        }
        if (f.isComment || !f.key) {
            f.raw !== void 0 && l.push(f);
            continue
        }
        if (o) {
            if (p.has(f.key))
                continue;
            p.add(f.key)
        }
        l.push(f)
    }
    const x = a ? da(l) : l
      , m = []
      , c = f => {
        if (!f.trim())
            return;
        m.length > 0 && m[m.length - 1].trim() !== "" && !m[m.length - 1].trim().startsWith("#") && !m[m.length - 1].trim().startsWith("!") && m.push(""),
        m.push(tt(f))
    }
    ;
    for (const f of x) {
        if (f.isComment || !f.key) {
            if (f.leadingComments && f.isInvalidProperty)
                for (const E of f.leadingComments)
                    c(E);
            f.raw !== void 0 && (f.isInvalidProperty ? m.push(f.raw) : c(f.raw));
            continue
        }
        if (f.leadingComments)
            for (const E of f.leadingComments)
                c(E);
        const h = d ?? f.separator ?? "="
          , g = et(f.key, {
            forKey: !0,
            targetEncoding: r
        })
          , v = et(f.value, {
            escapeLeadingSpace: !0,
            targetEncoding: r
        })
          , b = f.inlineComment ? " " + tt(f.inlineComment) : ""
          , N = `${g}${h === " " ? " " : ` ${h} `}${v}${b}`;
        if (N.length <= n) {
            m.push(N);
            continue
        }
        const S = ua(g, h, v, b, n);
        m.push(S)
    }
    return m.join(`
`) + (m.length > 0 ? `
` : "")
}
function da(s) {
    const t = [];
    let r = [];
    const n = () => {
        if (r.length > 0) {
            const a = r.sort( (o, d) => o.key.localeCompare(d.key, void 0, {
                sensitivity: "base"
            }));
            t.push(...a),
            r = []
        }
    }
    ;
    for (const a of s)
        a.isComment || !a.key ? (n(),
        t.push(a)) : r.push(a);
    return n(),
    t
}
function tt(s, t) {
    if (!s.trim())
        return s;
    const r = s.trimStart();
    return r.startsWith("#") || r.startsWith("!") ? s : "# " + s
}
function ua(s, t, r, n, a) {
    const o = []
      , d = t === " " ? `${s} ` : `${s} ${t} `;
    let l = r
      , p = !0;
    const x = "    ";
    for (; l.length; ) {
        const m = a - (p ? d.length : x.length) - (p ? n.length : 0) - 1;
        if (m <= 0)
            break;
        const c = ma(l, m)
          , u = l.slice(0, c);
        l = l.slice(c),
        !l.length ? o.push((p ? d : x) + u + n) : o.push((p ? d : x) + u + "\\"),
        p = !1
    }
    return l.length && o.push(x + l + n),
    o.join(`
`)
}
function ma(s, t) {
    if (s.length <= t)
        return s.length;
    const r = s.lastIndexOf(" ", t);
    return r === -1 ? t : r + 1
}
const rt = (s, t) => s ? t === "decode" ? s.replace(/\\u([0-9a-fA-F]{4})/g, (r, n) => String.fromCharCode(parseInt(n, 16))) : [...s].map(r => `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`).join("") : "";
function fa(s, t, r) {
    switch (t) {
    case "raw":
        return r || "";
    case "utf8":
        return rt(r || "", "decode");
    case "iso":
        return rt(r || "", "encode");
    case "json":
        {
            const n = {};
            for (const a of s)
                !a.isComment && a.key && (n[a.key] = a.value);
            return JSON.stringify(n, null, 2)
        }
    case "yaml":
        {
            const n = {};
            for (const a of s)
                !a.isComment && a.key && (n[a.key] = a.value);
            return ur(n, {
                indent: 2,
                lineWidth: -1
            })
        }
    case "env":
        return s.filter(a => !a.isComment && a.key).map(a => {
            const o = a.key.toUpperCase().replace(/[^A-Z0-9_]/g, "_")
              , d = a.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
            return `${o}="${d}"`
        }
        ).join(`
`);
    default:
        throw new Error(`Unsupported export format: ${t}`)
    }
}
function ha(s, t) {
    switch (t.type) {
    case "SET_VALIDATION":
        return {
            ...s,
            validationStatus: t.payload
        };
    case "SHOW_HIGHLIGHTS":
        return {
            ...s,
            showHighlights: t.payload
        };
    case "SET_SELECTED_LINES":
        return {
            ...s,
            selectedLines: t.payload
        };
    case "RESET_VALIDATION":
        return {
            ...s,
            validationStatus: null
        };
    default:
        return s
    }
}
const xa = {
    showHighlights: !0,
    validationStatus: null,
    selectedLines: null
}
  , pa = Ve.theme({
    "&": {
        fontSize: "14px",
        backgroundColor: "#ffffff",
        color: "#000000"
    },
    ".cm-content": {
        padding: "16px",
        backgroundColor: "#ffffff"
    },
    ".cm-focused": {
        outline: "none"
    },
    ".cm-editor": {
        backgroundColor: "#ffffff"
    },
    ".cm-scroller": {
        backgroundColor: "#ffffff",
        overflow: "auto"
    },
    ".cm-comment": {
        color: "#6a737d"
    },
    ".cm-keyword": {
        color: "#d73a49"
    },
    ".cm-selectionBackground": {
        backgroundColor: "#316ac5 !important"
    },
    "&.cm-focused .cm-selectionBackground": {
        backgroundColor: "#316ac5 !important"
    },
    ".cm-selectionMatch": {
        backgroundColor: "#99ccff"
    },
    "&.cm-focused .cm-selectionMatch": {
        backgroundColor: "#99ccff"
    },
    ".cm-multiline-property": {
        borderLeft: "3px solid #e0e7ff",
        paddingLeft: "8px",
        marginLeft: "-8px",
        backgroundColor: "#f8faff"
    },
    ".cm-multiline-continuation": {
        color: "#6366f1",
        fontWeight: "bold"
    }
})
  , ga = [{
    id: "UTF-8",
    label: "UTF-8"
}, {
    id: "ISO-8859-1",
    label: "ISO-8859-1"
}]
  , ba = [{
    id: "raw",
    label: "Raw Properties"
}, {
    id: "utf8",
    label: "UTF-8 Properties"
}, {
    id: "iso",
    label: "ISO-8859-1 Properties"
}, {
    id: "json",
    label: "JSON Format"
}, {
    id: "yaml",
    label: "YAML Format"
}, {
    id: "env",
    label: "Environment Variables"
}];
function ya(s, t, r, n) {
    const [a,o] = i.useState( () => {
        if (t || !s)
            return !0;
        const p = new Date().toDateString();
        if (r && r.endsWith(".properties")) {
            const c = `properties_advanced_files_${p}`
              , u = JSON.parse(localStorage.getItem(c) || "[]")
              , f = `${n || s}:${r}`;
            if (u.includes(f))
                return !0
        }
        const x = `properties_advanced_views_${p}`;
        return parseInt(localStorage.getItem(x) || "0", 10) < 5
    }
    );
    return i.useEffect( () => {
        if (t || !s || !r || !r.endsWith(".properties"))
            return;
        const p = new Date().toDateString()
          , x = `properties_viewed_files_${p}`
          , m = `properties_advanced_files_${p}`
          , c = JSON.parse(localStorage.getItem(x) || "[]")
          , u = JSON.parse(localStorage.getItem(m) || "[]")
          , f = `${n || s}:${r}`;
        if (!c.includes(f)) {
            c.push(f),
            localStorage.setItem(x, JSON.stringify(c));
            const h = c.length;
            localStorage.setItem(`properties_advanced_views_${p}`, h.toString()),
            h <= 5 && (u.push(f),
            localStorage.setItem(m, JSON.stringify(u))),
            h > 5 && o(!1)
        }
    }
    , [t, s, r, n]),
    {
        useAdvancedEditor: a,
        setUseAdvancedEditor: o,
        getRemainingViews: () => {
            if (t || !s)
                return null;
            const x = `properties_viewed_files_${new Date().toDateString()}`
              , m = JSON.parse(localStorage.getItem(x) || "[]");
            return Math.max(0, 5 - m.length)
        }
        ,
        hasAdvancedAccess: () => {
            if (t || !s || !r)
                return !0;
            const x = `properties_advanced_files_${new Date().toDateString()}`
              , m = JSON.parse(localStorage.getItem(x) || "[]")
              , c = `${n || s}:${r}`;
            return m.includes(c)
        }
    }
}
function va(s, t) {
    const [r,n] = i.useState(!1)
      , [a,o] = i.useState("general");
    return {
        showProUpgrade: r,
        setShowProUpgrade: n,
        upgradeContext: a,
        showUpgradeForErrors: () => {
            o("error"),
            n(!0)
        }
        ,
        executeWithFeatureGate: (x, m) => {
            if (!s) {
                o("feature"),
                n(!0);
                return
            }
            m()
        }
        ,
        trackUsageIfNeeded: x => {}
    }
}
const cs = ({content: s, onContentChange: t, isSearchActive: r, highlightSearchMatches: n, className: a, filePath: o, fileName: d, jarName: l, jarInstanceId: p, isMinecraftMod: x, isReadOnly: m=!1}) => {
    const {isProUser: c} = ke()
      , u = ya(p, c, o, l)
      , f = va(u.useAdvancedEditor)
      , [h,g] = i.useState(s)
      , [v,b] = i.useState("UTF-8")
      , N = i.useCallback(w => {
        b(w),
        Q({
            type: "RESET_VALIDATION"
        })
    }
    , [])
      , S = i.useMemo( () => ({
        selectedEncoding: v,
        handleEncodingChange: N,
        displayContent: h
    }), [v, N, h])
      , E = h
      , L = S.displayContent
      , T = i.useCallback(w => {
        const D = w.target.value;
        console.log("✏️ User input change:", {
            inputLength: D.length,
            encoding: v,
            first50: D.slice(0, 50) + "..."
        }),
        g(D),
        t(D),
        Q({
            type: "RESET_VALIDATION"
        })
    }
    , [v, t])
      , R = i.useCallback(w => {
        setTimeout( () => {
            console.log("📋 Paste event detected in simple editor - validation will run automatically")
        }
        , 0)
    }
    , [])
      , O = i.useCallback(w => {
        console.log("👁️ Focus lost in simple editor - validation is active")
    }
    , []);
    i.useEffect( () => {
        var w;
        s !== h && (console.log("📝 Content prop changed:", {
            from: (h == null ? void 0 : h.slice(0, 50)) + "...",
            to: (s == null ? void 0 : s.slice(0, 50)) + "...",
            contentLength: s == null ? void 0 : s.length,
            editedLength: h == null ? void 0 : h.length,
            stackTrace: (w = new Error().stack) == null ? void 0 : w.split(`
`).slice(1, 4).join(`
`)
        }),
        g(s))
    }
    , [s, h]);
    const {entries: C, markers: B} = i.useMemo( () => {
        const w = u.useAdvancedEditor ? s : h;
        return st(w, v)
    }
    , [s, h, v, u.useAdvancedEditor])
      , {errors: se, warnings: W} = i.useMemo( () => {
        const w = B.reduce( (D, X) => (D[X.severity]++,
        D), {
            error: 0,
            warning: 0
        });
        return {
            errors: w.error,
            warnings: w.warning
        }
    }
    , [B])
      , [oe,Q] = i.useReducer(ha, xa)
      , [te] = i.useState( () => Fe())
      , le = i.useRef(null)
      , re = i.useRef(null)
      , pe = i.useCallback( (w, D, X) => {
        const $ = X.split(`
`);
        let K = 0
          , ce = 0
          , ne = 0;
        for (let j = 0; j < $.length; j++) {
            const A = $[j].length + 1;
            if (ne <= w && w < ne + A && (K = j),
            ne <= D && D <= ne + A) {
                ce = j;
                break
            }
            ne += A
        }
        let xe = w
          , k = D;
        return C.forEach(j => {
            if (j.isMultiline && j.lineStart && j.lineEnd) {
                const A = j.lineStart - 1
                  , y = j.lineEnd - 1;
                if (K <= y && ce >= A) {
                    let I = 0
                      , P = 0
                      , M = 0;
                    for (let F = 0; F < $.length; F++) {
                        if (F === A && (I = M),
                        F === y) {
                            P = M + $[F].length;
                            break
                        }
                        M += $[F].length + 1
                    }
                    xe = Math.min(xe, I),
                    k = Math.max(k, P)
                }
            }
        }
        ),
        {
            start: xe,
            end: k
        }
    }
    , [C])
      , me = i.useCallback(w => {
        const D = w.currentTarget
          , X = D.selectionStart
          , $ = D.selectionEnd;
        if (X !== $) {
            const K = pe(X, $, L);
            (K.start !== X || K.end !== $) && setTimeout( () => {
                D.setSelectionRange(K.start, K.end)
            }
            , 0)
        }
    }
    , [L, pe])
      , ee = Yn(f)
      , J = i.useCallback(w => {
        if (!w || !qs[w]) {
            Q({
                type: "SET_VALIDATION",
                payload: {
                    type: "error",
                    message: `Invalid export format: ${w}`
                }
            });
            return
        }
        ee(U.PROPERTIES_EXPORT.featureId, () => {
            try {
                if ((w === "json" || w === "yaml" || w === "env") && C.filter(ne => !ne.isComment && ne.key).length === 0) {
                    Q({
                        type: "SET_VALIDATION",
                        payload: {
                            type: "error",
                            message: `Cannot export to ${w.toUpperCase()}: No valid properties found`
                        }
                    });
                    return
                }
                const D = fa(C, w, E)
                  , {extension: X, mimeType: $} = qs[w]
                  , K = (d == null ? void 0 : d.replace(/\.[^/.]+$/, "")) || "properties"
                  , ce = new Blob([D],{
                    type: `${$};charset=utf-8`
                });
                Me.saveAs(ce, `${K}.${X}`)
            } catch (D) {
                const X = D instanceof Error ? D.message : "Unknown error";
                console.error("Export failed:", D),
                Q({
                    type: "SET_VALIDATION",
                    payload: {
                        type: "error",
                        message: `Cannot export ${w.toUpperCase()}: ${X}`
                    }
                })
            }
        }
        )
    }
    , [C, E, d, ee])
      , H = i.useCallback( () => {
        ee(U.PROPERTIES_FORMAT.featureId, () => {
            try {
                const w = ca(C, {
                    encoding: v,
                    sortKeys: !0
                });
                g(w),
                t(w),
                Q({
                    type: "SET_VALIDATION",
                    payload: {
                        type: "success",
                        message: "Properties formatted successfully"
                    }
                })
            } catch (w) {
                const D = w instanceof Error ? w.message : "Unknown error";
                console.error("Format failed:", w),
                Q({
                    type: "SET_VALIDATION",
                    payload: {
                        type: "error",
                        message: `Cannot format properties: ${D}`
                    }
                })
            }
        }
        )
    }
    , [C, v, ee])
      , z = i.useCallback( () => {
        ee(U.PROPERTIES_VALIDATE.featureId, () => {
            try {
                const w = u.useAdvancedEditor ? s : h !== void 0 ? h : s
                  , {entries: D, markers: X} = st(w, v)
                  , $ = X.filter(k => k.severity === "error")
                  , K = X.filter(k => k.severity === "warning")
                  , ce = D.filter(k => !k.isComment && k.key).length;
                let ne, xe = "success";
                if (X.length === 0)
                    ne = "Valid",
                    xe = "success";
                else {
                    const k = [];
                    if ($.length > 0) {
                        const j = $.map(y => `line ${y.line}`).join(", ")
                          , A = [...new Set($.map(y => y.message.includes("continuation") ? "broken continuation" : y.message.includes("Invalid property") ? "invalid syntax" : y.message.includes("Characters outside ISO-8859-1") ? "encoding problem" : "error"))];
                        k.push(`${$.length} error${$.length === 1 ? "" : "s"} (${A.join(", ")}) at ${j}`)
                    }
                    if (K.length > 0) {
                        const j = K.map(y => `line ${y.line}`).join(", ")
                          , A = [...new Set(K.map(y => y.message.includes("Duplicate key") ? "duplicate keys" : y.message.includes("Unicode escape sequences") ? "encoding problem" : "warning"))];
                        k.push(`${K.length} warning${K.length === 1 ? "" : "s"} (${A.join(", ")}) at ${j}`)
                    }
                    ne = `⚠ Issues found: ${k.join("; ")}`,
                    xe = $.length > 0 ? "error" : "warning"
                }
                Q({
                    type: "SET_VALIDATION",
                    payload: {
                        type: xe,
                        message: ne
                    }
                })
            } catch (w) {
                const D = w instanceof Error ? w.message : "Unknown error";
                console.error("Validation failed:", w),
                Q({
                    type: "SET_VALIDATION",
                    payload: {
                        type: "error",
                        message: `Validation failed: ${D}`
                    }
                })
            }
        }
        )
    }
    , [h, s, ee]);
    i.useCallback( () => {
        if (c) {
            u.setUseAdvancedEditor(!u.useAdvancedEditor);
            return
        }
        if (!p) {
            u.setUseAdvancedEditor(!u.useAdvancedEditor);
            return
        }
        if (!u.useAdvancedEditor) {
            if (u.hasAdvancedAccess()) {
                u.setUseAdvancedEditor(!0);
                return
            }
            const w = u.getRemainingViews();
            if (w !== null && w <= 0) {
                f.setShowProUpgrade(!0);
                return
            }
        }
        u.setUseAdvancedEditor(!u.useAdvancedEditor)
    }
    , [c, p, u, f]);
    const Y = i.useCallback( () => {
        if (c) {
            u.setUseAdvancedEditor(!0);
            return
        }
        if (u.hasAdvancedAccess()) {
            u.setUseAdvancedEditor(!0);
            return
        }
        const w = u.getRemainingViews();
        if (w !== null && w <= 0) {
            f.showUpgradeForErrors();
            return
        }
        u.setUseAdvancedEditor(!0)
    }
    , [c, u, f]);
    i.useCallback( () => {
        Q({
            type: "SHOW_HIGHLIGHTS",
            payload: !1
        }),
        setTimeout( () => {
            le.current && le.current.focus()
        }
        , 0)
    }
    , []),
    i.useCallback(w => {
        var D, X;
        if (u.useAdvancedEditor && ((D = re.current) != null && D.view)) {
            const $ = re.current.view
              , K = $.state.doc.line(w);
            $.dispatch({
                selection: {
                    anchor: K.from,
                    head: K.to
                },
                scrollIntoView: !0
            }),
            $.focus()
        } else if (le.current) {
            const $ = L.split(`
`);
            let K = 0;
            for (let ce = 0; ce < w - 1 && ce < $.length; ce++)
                K += $[ce].length + 1;
            le.current.focus(),
            le.current.setSelectionRange(K, K + (((X = $[w - 1]) == null ? void 0 : X.length) || 0))
        }
    }
    , [u.useAdvancedEditor, L]);
    const G = i.useMemo( () => ({
        viewer: "properties-viewer",
        filePath: o,
        fileType: ".properties",
        jarName: l,
        jarInstanceId: p
    }), [o, l, p]);
    if (m)
        return e.jsxs("div", {
            className: V("flex-1 flex flex-col h-full", a),
            children: [e.jsx("div", {
                className: "flex-1 p-2 min-h-0 flex flex-col",
                children: r ? e.jsx("div", {
                    className: "h-full overflow-auto",
                    children: e.jsx("div", {
                        className: "font-mono text-sm whitespace-pre-wrap",
                        children: n(s)
                    })
                }) : e.jsx(Le, {
                    className: "w-full flex-1 font-mono text-sm resize-none border rounded-md p-2 overflow-auto bg-gray-100 cursor-not-allowed",
                    value: s,
                    readOnly: !0,
                    spellCheck: !1,
                    title: "Editing disabled - daily upload limit reached"
                })
            }), e.jsx("div", {
                className: "flex-shrink-0 p-2 border-t bg-gray-50",
                children: e.jsx(Pe, {
                    adSlot: "1234567892",
                    adFormat: "auto",
                    campaign: te,
                    context: G,
                    variant: "minimal",
                    isMinecraftMod: x
                })
            })]
        });
    const q = i.useMemo( () => mr.define({
        token(w) {
            return w.sol() && w.match(/^\s*[#!]/) ? (w.skipToEnd(),
            "comment") : w.match(/^[^=:]+[=:]/) ? "keyword" : (w.next(),
            null)
        }
    }), [])
      , Z = i.useMemo( () => {
        const w = es.line({
            class: "cm-multiline-property"
        })
          , D = es.mark({
            class: "cm-multiline-continuation"
        });
        return fr.define({
            create() {
                return es.none
            },
            update($, K) {
                const ce = [];
                return K.state.doc.toString(),
                C.forEach(ne => {
                    if (ne.isMultiline && ne.lineStart && ne.lineEnd)
                        for (let xe = ne.lineStart; xe <= ne.lineEnd; xe++)
                            try {
                                const k = K.state.doc.line(xe);
                                ce.push(w.range(k.from));
                                const A = k.text.lastIndexOf(" \\");
                                if (A !== -1) {
                                    const y = k.from + A
                                      , I = k.from + A + 2;
                                    ce.push(D.range(y, I))
                                }
                            } catch {}
                }
                ),
                es.set(ce)
            },
            provide: $ => Ve.decorations.from($)
        })
    }
    , [C])
      , de = i.useMemo( () => Ve.updateListener.of(w => {
        if (w.selectionSet) {
            const D = w.state.selection.main;
            if (!D.empty) {
                const X = w.state.doc.toString()
                  , $ = pe(D.from, D.to, X);
                ($.start !== D.from || $.end !== D.to) && setTimeout( () => {
                    var K;
                    (K = re.current) != null && K.view && re.current.view.dispatch({
                        selection: {
                            anchor: $.start,
                            head: $.end
                        }
                    })
                }
                , 0)
            }
        }
    }
    ), [pe])
      , ae = i.useMemo( () => Ve.domEventHandlers({
        paste: (w, D) => (setTimeout( () => {
            console.log("📋 Paste event detected in advanced editor - validation will run automatically")
        }
        , 0),
        !1),
        blur: (w, D) => (console.log("👁️ Focus lost in advanced editor - validation is active"),
        !1)
    }), [])
      , fe = [{
        id: "validate",
        label: "Validate",
        title: "Check for duplicate keys and invalid property lines (unlimited in Advanced mode)",
        icon: e.jsx(Se, {
            size: 12
        }),
        className: "",
        onClick: z
    }, {
        id: "format",
        label: "Format",
        title: "Sort properties alphabetically and apply consistent formatting (unlimited in Advanced mode)",
        icon: e.jsx(Hr, {
            size: 12
        }),
        className: "",
        onClick: H
    }]
      , Ie = ({title: w, icon: D, children: X, className: $, ...K}) => e.jsxs(fs, {
        children: [e.jsx(hs, {
            asChild: !0,
            children: e.jsxs(_, {
                size: "sm",
                className: V("h-7 px-2 text-xs", $),
                ...K,
                children: [D && e.jsx("span", {
                    className: "mr-1",
                    children: D
                }), X ?? w]
            })
        }), e.jsx(Qe, {
            children: e.jsx("p", {
                children: w
            })
        })]
    })
      , Ee = ({title: w, icon: D, className: X, children: $, dropdownContent: K, ...ce}) => e.jsxs(Jn, {
        children: [e.jsxs(fs, {
            children: [e.jsx(hs, {
                asChild: !0,
                children: e.jsx(Vn, {
                    asChild: !0,
                    children: e.jsxs(_, {
                        size: "sm",
                        className: V("h-7 px-2 text-xs", X),
                        ...ce,
                        children: [D && e.jsx("span", {
                            className: "mr-1",
                            children: D
                        }), $, e.jsx(vt, {
                            size: 10,
                            className: "ml-1"
                        })]
                    })
                })
            }), e.jsx(Qe, {
                children: e.jsx("p", {
                    children: w
                })
            })]
        }), K]
    })
      , ge = () => u.useAdvancedEditor ? e.jsxs("div", {
        className: "flex justify-between items-center p-2 border-b bg-gray-50 flex-shrink-0",
        children: [e.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [e.jsx(us, {
                    size: 14,
                    className: "text-black"
                }), e.jsx("span", {
                    className: "text-xs font-bold text-gray-700",
                    children: "Advanced Editor"
                }), e.jsx(Rs, {
                    checked: u.useAdvancedEditor,
                    disabled: !c && !u.hasAdvancedAccess() && (u.getRemainingViews() === null || u.getRemainingViews() === 0),
                    onCheckedChange: w => {
                        c || u.hasAdvancedAccess() || u.getRemainingViews() !== null && u.getRemainingViews() > 0 ? u.setUseAdvancedEditor(w) : window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank")
                    }
                    ,
                    title: "Toggle Advanced Editor mode"
                })]
            }), !c && u.getRemainingViews() !== null && u.getRemainingViews() > 0 && e.jsxs("span", {
                className: "text-xs text-gray-500",
                children: [u.getRemainingViews(), " files left today"]
            }), oe.validationStatus && e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [e.jsx("span", {
                    className: V("text-xs px-2 py-1 rounded-md", oe.validationStatus.type === "success" ? "bg-green-100 text-green-700 border border-green-200" : oe.validationStatus.type === "warning" ? "bg-yellow-100 text-yellow-700 border border-yellow-200" : "bg-red-100 text-red-700 border border-red-200"),
                    children: oe.validationStatus.message
                }), e.jsx(_, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => Q({
                        type: "RESET_VALIDATION"
                    }),
                    className: "h-5 w-5 p-0 hover:bg-gray-200",
                    title: "Clear validation status",
                    children: e.jsx(Ue, {
                        size: 12
                    })
                })]
            })]
        }), e.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [e.jsx("div", {
                className: "flex items-center space-x-2",
                children: e.jsx(Ee, {
                    title: `Select text encoding - ${S.selectedEncoding === "UTF-8" ? "UTF-8 shows Unicode characters directly" : "ISO-8859-1 uses escape sequences for non-ASCII characters"}`,
                    variant: "outline",
                    dropdownContent: e.jsx(Ds, {
                        align: "start",
                        className: "w-32",
                        children: ga.map(w => e.jsx(Ls, {
                            onClick: () => S.handleEncodingChange(w.id),
                            className: S.selectedEncoding === w.id ? "bg-blue-50" : "",
                            children: w.label
                        }, w.id))
                    }),
                    children: S.selectedEncoding
                })
            }), e.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [fe.map(w => e.jsx(Ie, {
                    title: w.title,
                    icon: w.icon,
                    variant: "outline",
                    onClick: w.onClick,
                    className: w.className,
                    children: w.label
                }, w.id)), e.jsx(Ee, {
                    title: "Export properties in various formats (unlimited in Advanced mode)",
                    icon: e.jsx(qe, {
                        size: 12
                    }),
                    variant: "outline",
                    className: "",
                    dropdownContent: e.jsx(Ds, {
                        align: "end",
                        children: ba.map(w => e.jsx(Ls, {
                            onClick: () => J(w.id),
                            children: w.label
                        }, w.id))
                    }),
                    children: "Export"
                })]
            })]
        })]
    }) : e.jsxs("div", {
        className: "flex justify-between items-center p-2 border-b bg-gray-50 flex-shrink-0",
        children: [e.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [e.jsx(us, {
                    size: 14,
                    className: "text-black"
                }), e.jsx("span", {
                    className: "text-xs font-bold text-gray-700",
                    children: "Advanced Editor"
                }), e.jsx(Rs, {
                    checked: u.useAdvancedEditor,
                    disabled: !c && !u.hasAdvancedAccess() && (u.getRemainingViews() === null || u.getRemainingViews() === 0),
                    onCheckedChange: w => {
                        c || u.hasAdvancedAccess() || u.getRemainingViews() !== null && u.getRemainingViews() > 0 ? u.setUseAdvancedEditor(w) : window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank")
                    }
                    ,
                    title: "Toggle Advanced Editor mode"
                })]
            }), !c && u.getRemainingViews() === 0 && e.jsx("span", {
                className: "text-xs text-gray-500",
                children: "No advanced usage left for today"
            })]
        }), !c && !u.hasAdvancedAccess() && (u.getRemainingViews() === null || u.getRemainingViews() === 0) && !u.useAdvancedEditor && e.jsxs(_, {
            size: "sm",
            onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank"),
            className: "h-7 px-3 text-xs",
            children: [e.jsx(be, {
                size: 12,
                className: "mr-1"
            }), "Upgrade to Pro"]
        })]
    })
      , _e = () => e.jsxs("div", {
        className: "flex-1 flex flex-col min-h-0",
        children: [se > 0 && !u.useAdvancedEditor && e.jsx("div", {
            className: "px-3 py-2 bg-red-50 border-b border-red-200",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [e.jsx("span", {
                        className: "text-red-500",
                        children: "⚠"
                    }), e.jsxs("span", {
                        className: "text-red-700 text-sm font-medium",
                        children: [se, " validation error", se === 1 ? "" : "s", " found in this file"]
                    })]
                }), e.jsx(_, {
                    variant: "ghost",
                    size: "sm",
                    onClick: Y,
                    className: "h-7 px-2 text-xs text-red-600 hover:text-red-800 hover:bg-red-100",
                    children: u.getRemainingViews() === 0 && !c ? "View Report" : "View Details"
                })]
            })
        }), W > 0 && se === 0 && !u.useAdvancedEditor && e.jsx("div", {
            className: "px-3 py-2 bg-red-50 border-b border-red-200",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [e.jsx("span", {
                        className: "text-red-500",
                        children: "⚠"
                    }), e.jsxs("span", {
                        className: "text-red-700 text-sm font-medium",
                        children: [W, " validation warning", W === 1 ? "" : "s", " found in this file"]
                    })]
                }), e.jsx(_, {
                    variant: "ghost",
                    size: "sm",
                    onClick: Y,
                    className: "h-7 px-2 text-xs text-red-600 hover:text-red-800 hover:bg-red-100",
                    children: u.getRemainingViews() === 0 && !c ? "View Report" : "View Details"
                })]
            })
        }), e.jsx("div", {
            className: "flex-1 p-2 min-h-0 flex flex-col",
            children: r ? e.jsx("div", {
                className: "h-full overflow-auto",
                children: e.jsx("div", {
                    className: "font-mono text-sm whitespace-pre-wrap",
                    children: n(L)
                })
            }) : u.useAdvancedEditor ? e.jsx("div", {
                className: "flex-1 rounded-md overflow-hidden",
                style: {
                    backgroundColor: "#ffffff"
                },
                children: e.jsx(hr, {
                    ref: re,
                    value: S.displayContent,
                    height: "100%",
                    className: "h-full",
                    onChange: w => {
                        const D = w || "";
                        console.log("📝 CodeMirror change:", {
                            inputLength: D.length,
                            encoding: S.selectedEncoding,
                            first50: D.slice(0, 50) + "..."
                        }),
                        g(D),
                        t(D),
                        Q({
                            type: "RESET_VALIDATION"
                        })
                    }
                    ,
                    extensions: [q, pa, Ve.lineWrapping, Z, de, ae, Ve.theme({
                        "&": {
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        },
                        ".cm-scroller": {
                            flex: "1",
                            overflow: "auto"
                        }
                    })],
                    basicSetup: {
                        lineNumbers: !0,
                        highlightSelectionMatches: !1,
                        searchKeymap: !1
                    }
                })
            }) : e.jsx(Le, {
                ref: le,
                className: "w-full flex-1 font-mono text-sm resize-none border rounded-md p-2 overflow-auto",
                value: S.displayContent,
                onChange: T,
                onSelect: me,
                onPaste: R,
                onBlur: O,
                spellCheck: !1
            })
        })]
    })
      , Re = () => e.jsx(e.Fragment, {
        children: e.jsx(we, {
            open: f.showProUpgrade,
            onOpenChange: f.setShowProUpgrade,
            children: e.jsxs(ye, {
                className: "sm:max-w-md",
                children: [e.jsxs(ve, {
                    children: [e.jsx(je, {
                        className: "flex items-center",
                        children: f.upgradeContext === "error" ? e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "text-red-500 mr-2",
                                children: "⚠"
                            }), "View Error Details"]
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx(be, {
                                className: "w-5 h-5 mr-2 text-amber-500"
                            }), "Upgrade to Pro"]
                        })
                    }), e.jsx(Ne, {
                        children: f.upgradeContext === "error" ? e.jsxs(e.Fragment, {
                            children: ["This file contains ", se, " validation error", se === 1 ? "" : "s", W > 0 && ` and ${W} warning${W === 1 ? "" : "s"}`, ". Upgrade to Pro to view detailed error information and use advanced tools to fix them."]
                        }) : "Unlock advanced features for properties files including unlimited validation, formatting, and export tools."
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col space-y-3 py-4",
                    children: [f.upgradeContext === "error" && e.jsxs("div", {
                        className: "mb-2 p-3 bg-red-50 border border-red-200 rounded-md",
                        children: [e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [e.jsx("span", {
                                className: "text-red-500",
                                children: "⚠"
                            }), e.jsxs("span", {
                                className: "text-red-700 text-sm font-medium",
                                children: [se, " validation error", se === 1 ? "" : "s", W > 0 && ` and ${W} warning${W === 1 ? "" : "s"}`, " detected"]
                            })]
                        }), e.jsx("p", {
                            className: "text-red-600 text-xs mt-1",
                            children: "Advanced mode shows detailed error locations and provides validation and formatting tools to fix them."
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "w-4 h-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Unlimited file processing"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "w-4 h-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Advanced syntax highlighting"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "w-4 h-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Export to multiple formats"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [e.jsx(Se, {
                            className: "w-4 h-4 text-green-500"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Properties validation & formatting"
                        })]
                    })]
                }), e.jsxs(Ce, {
                    children: [e.jsx(_, {
                        variant: "outline",
                        onClick: () => f.setShowProUpgrade(!1),
                        children: "Maybe Later"
                    }), e.jsx(_, {
                        onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank"),
                        children: f.upgradeContext === "error" ? "Upgrade to Fix Errors" : "Upgrade Now"
                    })]
                })]
            })
        })
    });
    return i.useEffect( () => {
        r && Q({
            type: "SHOW_HIGHLIGHTS",
            payload: !0
        })
    }
    , [r]),
    i.useEffect( () => {
        Q({
            type: "RESET_VALIDATION"
        })
    }
    , [s]),
    e.jsx(zs, {
        delayDuration: 500,
        children: e.jsxs("div", {
            className: "flex flex-col h-full",
            children: [ge(), _e(), e.jsx("div", {
                className: "flex-shrink-0 p-2 border-t bg-gray-50",
                children: e.jsx(Pe, {
                    adSlot: "1234567893",
                    adFormat: "auto",
                    campaign: te,
                    context: G,
                    variant: "minimal",
                    isMinecraftMod: x
                })
            }), Re()]
        })
    })
}
  , ja = {
    png: {
        component: De,
        isBinary: !0
    },
    jpg: {
        component: De,
        isBinary: !0
    },
    jpeg: {
        component: De,
        isBinary: !0
    },
    gif: {
        component: De,
        isBinary: !0
    },
    bmp: {
        component: De,
        isBinary: !0
    },
    webp: {
        component: De,
        isBinary: !0
    },
    svg: {
        component: De,
        isBinary: !0
    },
    ico: {
        component: De,
        isBinary: !0
    },
    class: {
        component: zn,
        isBinary: !0
    },
    json: {
        component: ls,
        isBinary: !1
    },
    properties: {
        component: cs,
        isBinary: !1
    }
}
  , nt = s => ja[s.toLowerCase()] || null
  , rs = ({content: s, onContentChange: t, isSearchActive: r, highlightSearchMatches: n, className: a, filePath: o, fileName: d, jarName: l, jarInstanceId: p, isMinecraftMod: x, isReadOnly: m=!1}) => {
    const [c,u] = Te.useState(!0)
      , f = Te.useRef(null)
      , [h] = i.useState( () => Fe())
      , g = i.useMemo( () => ({
        viewer: "editable-viewer",
        filePath: o,
        fileType: (d == null ? void 0 : d.split(".").pop()) || void 0,
        jarName: l,
        jarInstanceId: p
    }), [o, d, l, p])
      , v = N => {
        t(N.target.value)
    }
      , b = () => {
        u(!1),
        setTimeout( () => {
            f.current && f.current.focus()
        }
        , 0)
    }
    ;
    return Te.useEffect( () => {
        r && u(!0)
    }
    , [r]),
    e.jsxs("div", {
        className: V("flex-1 flex flex-col h-full", a),
        children: [e.jsx("div", {
            className: "flex-1 p-4 flex flex-col",
            children: r && c ? e.jsx("div", {
                className: "flex-1 font-mono text-sm whitespace-pre-wrap overflow-auto h-full cursor-pointer border rounded-md p-2 bg-gray-50 hover:bg-gray-100 transition-colors",
                onClick: b,
                title: "Click to edit this file",
                children: n(s)
            }) : e.jsx(Le, {
                ref: f,
                className: V("w-full flex-1 h-full font-mono text-sm resize-none border rounded-md p-2 focus-visible:ring-1 focus-visible:ring-ring", m ? "bg-gray-100 cursor-not-allowed" : "bg-blue-50"),
                value: s,
                readOnly: m,
                onChange: v,
                style: {
                    overflow: "auto"
                },
                spellCheck: !1,
                title: m ? "Editing disabled - daily upload limit reached" : void 0
            })
        }), e.jsx("div", {
            className: "flex-shrink-0 p-2 border-t bg-gray-50",
            children: e.jsx(Pe, {
                adSlot: "1234567895",
                adFormat: "auto",
                campaign: h,
                context: g,
                variant: "minimal",
                isMinecraftMod: x
            })
        })]
    })
}
  , qt = i.forwardRef( ({className: s, ...t}, r) => e.jsx(Dt, {
    ref: r,
    className: V("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", s),
    ...t,
    children: e.jsx(Kr, {
        className: V("flex items-center justify-center text-current"),
        children: e.jsx(Se, {
            className: "h-4 w-4"
        })
    })
}));
qt.displayName = Dt.displayName;
const Vs = ({isOpen: s, onClose: t, onConfirm: r, fileName: n}) => {
    const [a,o] = Te.useState(!1);
    Te.useEffect( () => {
        s || o(!1)
    }
    , [s]);
    const d = () => {
        a && r()
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: t,
        children: e.jsxs(ye, {
            className: "sm:max-w-[500px]",
            children: [e.jsxs(ve, {
                children: [e.jsxs("div", {
                    className: "flex items-center",
                    children: [e.jsx(Zr, {
                        className: "h-6 w-6 text-amber-500 mr-2"
                    }), e.jsx(je, {
                        children: "Security Notice: Executable Content"
                    })]
                }), e.jsxs(Ne, {
                    children: ["You are about to download ", e.jsx("strong", {
                        children: n
                    })]
                })]
            }), e.jsxs("div", {
                className: "py-3 text-sm text-gray-700 space-y-3",
                children: [e.jsx("p", {
                    children: "This file contains binary data which could potentially be harmful if from an untrusted source. Binary files may include executable code, archives, images with embedded data, or other non-text content. By downloading this content, you acknowledge:"
                }), e.jsxs("ul", {
                    className: "list-disc pl-5 space-y-2",
                    children: [e.jsx("li", {
                        children: "You understand the security implications of binary content"
                    }), e.jsx("li", {
                        children: "You will scan this file with antivirus software before opening or execution"
                    }), e.jsx("li", {
                        children: "This file is processed entirely in your browser and has not been modified by our servers"
                    }), e.jsx("li", {
                        children: "You will only use this download for legitimate purposes"
                    }), e.jsx("li", {
                        children: "You take full responsibility for any risks associated with using this file"
                    })]
                }), e.jsxs("div", {
                    className: "bg-blue-50 p-3 rounded-md border border-blue-200 mt-3",
                    children: [e.jsx("p", {
                        className: "text-blue-800 font-medium mb-1",
                        children: "Security Information"
                    }), e.jsx("p", {
                        className: "text-blue-600 text-xs",
                        children: "Our application processes files entirely in your browser to maintain security. We do not store or modify the contents of your JAR files on our servers. All modifications are performed locally in your browser before download."
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center space-x-2 mt-4 pt-2 border-t border-gray-200",
                    children: [e.jsx(qt, {
                        id: "acknowledge-risk",
                        checked: a,
                        onCheckedChange: l => o(l === !0),
                        "aria-label": "Acknowledge download risk"
                    }), e.jsx(ys, {
                        htmlFor: "acknowledge-risk",
                        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        children: "I understand the risks and agree to proceed with this download."
                    })]
                }), e.jsx("div", {
                    className: "bg-amber-50 p-3 rounded-md border border-amber-200 mt-3",
                    children: e.jsxs("p", {
                        className: "text-amber-800 text-xs",
                        children: ["💎 ", e.jsx("strong", {
                            children: "Pro users"
                        }), " can skip this disclaimer and download files directly without confirmation dialogs."]
                    })
                }), e.jsx("p", {
                    className: "text-xs text-gray-500 mt-2",
                    children: e.jsxs("a", {
                        href: "/kb/security",
                        className: "text-blue-600 hover:underline flex items-center",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: ["Learn more about our security practices ", e.jsx(Us, {
                            size: 12,
                            className: "ml-1"
                        })]
                    })
                })]
            }), e.jsxs(Ce, {
                children: [e.jsx(_, {
                    variant: "outline",
                    onClick: t,
                    className: "mr-2",
                    children: "Cancel"
                }), e.jsx(_, {
                    onClick: d,
                    disabled: !a,
                    className: `bg-blue-600 hover:bg-blue-700 ${a ? "" : "opacity-50 cursor-not-allowed"}`,
                    children: "I Understand, Download File"
                })]
            })]
        })
    })
}
  , wa = (s, t=2) => {
    if (s === 0)
        return "0 Bytes";
    const r = 1024
      , n = t < 0 ? 0 : t
      , a = ["Bytes", "KB", "MB", "GB", "TB"]
      , o = Math.floor(Math.log(s) / Math.log(r));
    return parseFloat((s / Math.pow(r, o)).toFixed(n)) + " " + a[o]
}
  , Cs = ({zipInstance: s, filePath: t, fileName: r, fileSize: n, jarName: a, jarInstanceId: o, isMinecraftMod: d}) => {
    const {isProUser: l} = ke()
      , [p,x] = i.useState(!1)
      , [m] = i.useState( () => Fe())
      , c = i.useMemo( () => ({
        viewer: "binary-viewer",
        filePath: t,
        fileType: (r == null ? void 0 : r.split(".").pop()) || "binary",
        jarName: a,
        jarInstanceId: o
    }), [t, r, a, o])
      , [u,f] = i.useState(null)
      , [h,g] = i.useState("")
      , v = async () => {
        if (!s)
            return;
        const E = s.file(t);
        if (E)
            try {
                const L = await E.async("blob");
                f(L),
                g(r),
                l ? (Me.saveAs(L, r),
                console.log("[BinaryViewer] Pro user - direct download:", r)) : x(!0)
            } catch (L) {
                console.error("Error downloading file:", L)
            }
    }
      , b = () => {
        u && h && (Me.saveAs(u, h),
        console.log("File downloaded successfully:", h)),
        x(!1),
        f(null),
        g("")
    }
      , N = () => {
        x(!1),
        f(null),
        g("")
    }
      , S = E => {
        var R;
        const L = ((R = E.split(".").pop()) == null ? void 0 : R.toLowerCase()) || "";
        return {
            jar: "Java Archive",
            war: "Web Application Archive",
            ear: "Enterprise Application Archive",
            zip: "ZIP Archive",
            rar: "RAR Archive",
            "7z": "7-Zip Archive",
            tar: "TAR Archive",
            gz: "Gzip Archive",
            exe: "Executable File",
            dll: "Dynamic Link Library",
            so: "Shared Object Library",
            dylib: "Dynamic Library",
            bin: "Binary File",
            dat: "Data File",
            db: "Database File",
            sqlite: "SQLite Database",
            ico: "Icon File",
            ttf: "TrueType Font",
            otf: "OpenType Font",
            woff: "Web Open Font Format",
            woff2: "Web Open Font Format 2",
            pdf: "PDF Document",
            doc: "Microsoft Word Document",
            docx: "Microsoft Word Document",
            xls: "Microsoft Excel Spreadsheet",
            xlsx: "Microsoft Excel Spreadsheet",
            ppt: "Microsoft PowerPoint Presentation",
            pptx: "Microsoft PowerPoint Presentation",
            odt: "OpenDocument Text",
            ods: "OpenDocument Spreadsheet",
            odp: "OpenDocument Presentation"
        }[L] || "Binary File"
    }
    ;
    return e.jsxs("div", {
        className: "flex flex-col h-full bg-gray-50",
        children: [e.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center p-8 text-center",
            children: [e.jsx("div", {
                className: "bg-gray-200 rounded-full p-6 mb-6",
                children: e.jsx(Gr, {
                    size: 48,
                    className: "text-gray-500"
                })
            }), e.jsx("h3", {
                className: "text-lg font-medium text-gray-900 mb-2",
                children: "Binary File Preview"
            }), e.jsx("p", {
                className: "text-gray-600 mb-4 max-w-md",
                children: "This file contains binary data and cannot be edited as text. Use the download button to save the file to your computer."
            }), e.jsx("div", {
                className: "bg-white rounded-lg border p-4 mb-6 text-sm",
                children: e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsxs("div", {
                        className: "flex justify-between",
                        children: [e.jsx("span", {
                            className: "text-gray-500",
                            children: "File Type:"
                        }), e.jsx("span", {
                            className: "font-medium",
                            children: S(r)
                        })]
                    }), e.jsxs("div", {
                        className: "flex justify-between",
                        children: [e.jsx("span", {
                            className: "text-gray-500",
                            children: "Size:"
                        }), e.jsx("span", {
                            className: "font-medium",
                            children: wa(n)
                        })]
                    }), e.jsxs("div", {
                        className: "flex justify-between",
                        children: [e.jsx("span", {
                            className: "text-gray-500",
                            children: "Name:"
                        }), e.jsx("span", {
                            className: "font-medium truncate max-w-xs",
                            title: r,
                            children: r
                        })]
                    })]
                })
            }), e.jsxs(_, {
                onClick: v,
                className: "mb-4",
                children: [e.jsx(qe, {
                    size: 16,
                    className: "mr-2"
                }), "Download File"]
            })]
        }), e.jsx("div", {
            className: "flex-shrink-0 p-3 border-t bg-white",
            children: e.jsx(Pe, {
                adSlot: "1234567896",
                adFormat: "rectangle",
                campaign: m,
                context: c,
                variant: "small",
                isMinecraftMod: d
            })
        }), e.jsx(Vs, {
            isOpen: p,
            onConfirm: b,
            onCancel: N,
            fileName: h
        })]
    })
}
;
function Na(s, t=8192) {
    const r = s.slice(0, Math.min(t, s.length));
    if (r.length === 0)
        return !1;
    for (let d = 0; d < r.length; d++)
        if (r[d] === 0)
            return !0;
    let n = 0;
    const a = r.length;
    for (let d = 0; d < r.length; d++) {
        const l = r[d];
        (l >= 32 && l <= 126 || l === 9 || l === 10 || l === 13 || l >= 128 && l <= 255) && n++
    }
    return n / a < .7
}
async function Qt(s, t=8192) {
    try {
        const r = await s.async("arraybuffer")
          , n = new Uint8Array(r);
        return Na(n, t)
    } catch (r) {
        return console.warn("Error reading file for binary detection:", r),
        !0
    }
}
function Sa(s) {
    var n;
    const t = ((n = s.split(".").pop()) == null ? void 0 : n.toLowerCase()) || "";
    return new Set(["jar", "war", "ear", "zip", "rar", "7z", "tar", "gz", "bz2", "exe", "dll", "so", "dylib", "lib", "jpg", "jpeg", "png", "gif", "bmp", "ico", "mp3", "mp4", "avi", "wav", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "db", "sqlite", "sqlite3", "class"]).has(t)
}
const Ca = ({selectedFile: s, zipInstance: t, entries: r, modifiedFiles: n, onFilesModified: a, onRevertFile: o, onDownloadFile: d, onDecompileLimit: l, onDecompileSuccess: p, isSearchActive: x, searchQuery: m, highlightSearchMatches: c, jarName: u, jarInstanceId: f, isMinecraftMod: h, isReadOnly: g=!1}) => {
    var q;
    const {isProUser: v} = ke()
      , [b,N] = i.useState(null)
      , [S,E] = i.useState(null)
      , [L,T] = i.useState(null)
      , [R,O] = i.useState(null)
      , [C,B] = i.useState(null)
      , se = i.useRef(null)
      , [W] = i.useState( () => Fe())
      , [oe,Q] = i.useState(!1)
      , te = i.useMemo( () => ({
        viewer: "content-browser",
        jarName: u,
        jarInstanceId: f,
        location: "file-selection"
    }), [u, f])
      , le = i.useMemo( () => ({
        viewer: s != null && s.includes(".json") ? "json-viewer" : s != null && s.includes(".properties") ? "properties-viewer" : s != null && s.includes(".class") ? "class-viewer" : s != null && s.includes(".png") || s != null && s.includes(".jpg") || s != null && s.includes(".gif") ? "image-viewer" : "general",
        jarName: u,
        jarInstanceId: f,
        filePath: s,
        location: "viewer-content"
    }), [s, u, f]);
    i.useEffect( () => {
        var Z, de;
        W != null && W.enabled && !oe && !s && (!((de = (Z = W.targeting) == null ? void 0 : Z.contentFilter) != null && de.requireMinecraftMod) || h !== null && h) && (Ye.trackImpression(W, te, "image-banner"),
        Q(!0))
    }
    , [W, oe, s, h, te]);
    const re = i.useCallback( (Z, de) => {
        for (const ae of de) {
            if (ae.path === Z)
                return ae;
            if (ae.isDirectory && ae.children) {
                const fe = re(Z, ae.children);
                if (fe)
                    return fe
            }
        }
        return null
    }
    , []);
    i.useEffect( () => {
        if (se.current && (URL.revokeObjectURL(se.current),
        se.current = null),
        !s || !t) {
            T(null),
            O(null),
            N(null),
            E(null),
            B(null);
            return
        }
        (async () => {
            const de = re(s, r);
            if (de) {
                B(de),
                T(null),
                O(null),
                N(null),
                E(null);
                try {
                    const ae = t.file(s);
                    if (ae) {
                        const fe = nt(de.fileType || "");
                        if (fe) {
                            if (!fe.isBinary) {
                                const Ie = await ae.async("string");
                                N(Ie),
                                E(Ie)
                            }
                            T( () => fe.component)
                        } else if (Sa(de.name))
                            T( () => Cs);
                        else if (await Qt(ae))
                            T( () => Cs);
                        else
                            try {
                                const ge = await ae.async("string");
                                N(ge),
                                E(ge),
                                T( () => rs)
                            } catch (ge) {
                                console.warn("Failed to read file as text, treating as binary:", ge),
                                T( () => Cs)
                            }
                        O(s)
                    }
                } catch (ae) {
                    console.error("Error loading file data:", ae)
                }
            }
        }
        )()
    }
    , [s, t, r, re]);
    const pe = () => {
        if (!t || !s || S === null)
            return;
        t.file(s, S),
        N(S);
        const Z = new Set(n).add(s);
        a(Z)
    }
      , me = async () => {
        E(b)
    }
      , ee = () => {
        s && o(s)
    }
      , J = b !== null && S !== null && b !== S
      , H = n.has(s || "");
    if (!s) {
        const Z = !v && (W == null ? void 0 : W.enabled);
        return e.jsxs("div", {
            className: "flex-1 flex flex-col h-full",
            children: [e.jsx("div", {
                className: "p-4 text-center border-b bg-gray-50 flex-shrink-0",
                children: e.jsx("p", {
                    className: "text-gray-500",
                    children: "Select a file to view its contents."
                })
            }), Z ? e.jsx("div", {
                className: "flex-1 p-4 min-h-0 flex items-center justify-center",
                children: e.jsx(_s, {
                    campaign: W,
                    context: te,
                    variant: "large",
                    isMinecraftMod: h,
                    className: "w-full max-w-2xl"
                })
            }) : e.jsx("div", {
                className: "flex-1 flex items-center justify-center",
                children: e.jsx("div", {
                    className: "text-center p-8 max-w-lg mx-auto",
                    children: v || h === !1 ? e.jsxs("div", {
                        className: "space-y-6",
                        children: [e.jsx("h3", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "What can you do with this JAR?"
                        }), e.jsxs("div", {
                            className: "grid gap-4 text-left",
                            children: [e.jsxs("div", {
                                className: "flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200",
                                children: [e.jsx("span", {
                                    className: "text-blue-600 text-xl",
                                    children: "🔍"
                                }), e.jsxs("div", {
                                    children: [e.jsx("h4", {
                                        className: "font-medium text-blue-800",
                                        children: "Browse & Explore"
                                    }), e.jsx("p", {
                                        className: "text-sm text-blue-700",
                                        children: "Navigate the file tree to view internal structure, resources, and configurations"
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200",
                                children: [e.jsx("span", {
                                    className: "text-green-600 text-xl",
                                    children: "✏️"
                                }), e.jsxs("div", {
                                    children: [e.jsx("h4", {
                                        className: "font-medium text-green-800",
                                        children: "Edit Files"
                                    }), e.jsx("p", {
                                        className: "text-sm text-green-700",
                                        children: "Modify text files, JSON configs, properties, and other editable content"
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200",
                                children: [e.jsx("span", {
                                    className: "text-purple-600 text-xl",
                                    children: "🔧"
                                }), e.jsxs("div", {
                                    children: [e.jsx("h4", {
                                        className: "font-medium text-purple-800",
                                        children: "Decompile Classes"
                                    }), e.jsx("p", {
                                        className: "text-sm text-purple-700",
                                        children: "View Java source code by decompiling .class files for analysis"
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200",
                                children: [e.jsx("span", {
                                    className: "text-orange-600 text-xl",
                                    children: "📦"
                                }), e.jsxs("div", {
                                    children: [e.jsx("h4", {
                                        className: "font-medium text-orange-800",
                                        children: "Extract & Download"
                                    }), e.jsx("p", {
                                        className: "text-sm text-orange-700",
                                        children: "Download individual files or convert the entire JAR to ZIP format"
                                    })]
                                })]
                            })]
                        }), e.jsx("p", {
                            className: "text-xs text-gray-500 mt-4",
                            children: "Select a file from the tree on the left to get started"
                        })]
                    }) : e.jsxs("div", {
                        className: "space-y-3",
                        children: [e.jsxs("div", {
                            className: "animate-pulse flex space-x-2 items-center justify-center",
                            children: [e.jsx("div", {
                                className: "h-2 w-2 bg-blue-400 rounded-full animate-bounce"
                            }), e.jsx("div", {
                                className: "h-2 w-2 bg-blue-400 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.1s"
                                }
                            }), e.jsx("div", {
                                className: "h-2 w-2 bg-blue-400 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.2s"
                                }
                            })]
                        }), e.jsx("p", {
                            className: "text-gray-500",
                            children: "Analyzing JAR file..."
                        })]
                    })
                })
            })]
        })
    }
    const z = L
      , Y = {
        zipInstance: t,
        filePath: s,
        isSearchActive: x,
        highlightSearchMatches: c,
        fileName: C == null ? void 0 : C.name,
        fileSize: C == null ? void 0 : C.size,
        onDecompileLimit: l,
        onDecompileSuccess: p,
        isMinecraftMod: h,
        jarName: u,
        jarInstanceId: f
    };
    (L === rs || L === ls || L === cs) && (Y.content = S || "",
    Y.onContentChange = E,
    Y.isReadOnly = g);
    const G = !v && (W == null ? void 0 : W.enabled);
    return e.jsxs("div", {
        className: "flex-1 overflow-hidden flex flex-col bg-white",
        children: [e.jsxs("div", {
            className: "flex justify-between items-center p-2 border-b bg-gray-50 flex-shrink-0",
            children: [e.jsxs("p", {
                className: "text-sm text-gray-600 truncate mr-4",
                children: [s, (L === rs || L === ls || L === cs) && !g && e.jsx("span", {
                    className: "ml-1 text-green-500 text-xs",
                    children: "(click to edit)"
                }), (L === rs || L === ls || L === cs) && g && e.jsx("span", {
                    className: "ml-1 text-amber-600 text-xs font-medium",
                    title: "Editing is disabled because daily upload limit reached",
                    children: "(read-only)"
                }), ((q = nt(s.split(".").pop() || "")) == null ? void 0 : q.isBinary) && n.has(s) && e.jsx("span", {
                    className: "ml-1 text-jar-500 text-xs",
                    children: "(strings modified)"
                })]
            }), e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsxs(_, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => d(s),
                    title: "Download this file",
                    children: [e.jsx(Yr, {
                        size: 16
                    }), e.jsx("span", {
                        className: "ml-1 hidden sm:inline",
                        children: "Download"
                    })]
                }), !g && J && e.jsxs(e.Fragment, {
                    children: [e.jsxs(_, {
                        variant: "outline",
                        size: "sm",
                        onClick: me,
                        className: "border-red-200 text-red-600 hover:bg-red-50 h-7 px-2 text-xs",
                        children: [e.jsx(Xr, {
                            size: 14,
                            className: "mr-1"
                        }), "Discard"]
                    }), e.jsxs(_, {
                        size: "sm",
                        onClick: pe,
                        className: "bg-blue-600 text-white hover:bg-blue-700 h-7 px-2 text-xs",
                        children: [e.jsx(qr, {
                            size: 14,
                            className: "mr-1"
                        }), "Save"]
                    })]
                }), !g && H && e.jsxs(_, {
                    variant: "outline",
                    size: "sm",
                    onClick: ee,
                    className: "border-red-200 text-red-600 hover:bg-red-50 h-7 px-2 text-xs",
                    children: [e.jsx(Lt, {
                        size: 14,
                        className: "mr-1"
                    }), "Revert"]
                })]
            })]
        }), e.jsx("div", {
            className: "flex-1 overflow-hidden",
            children: z ? e.jsx(z, {
                ...Y
            }, R) : e.jsx("div", {
                className: "flex-1 flex items-center justify-center",
                children: e.jsx("p", {
                    children: "Cannot preview this file type."
                })
            })
        }), G && e.jsx("div", {
            className: "flex-shrink-0 p-3 bg-gray-50 border-t",
            children: e.jsx(_s, {
                campaign: W,
                context: le,
                variant: "minimal",
                isMinecraftMod: h,
                className: "w-full"
            })
        })]
    })
}
  , ka = 10
  , ns = 10
  , at = 1
  , Ea = ["block", "item", "entity", "mixin", "gui", "tileentity", "packet", "config", "registry", "mod"];
async function er(s) {
    try {
        const t = Object.keys(s.files);
        let r = 0;
        const n = new Set
          , a = [];
        let o = !1;
        for (const l of t) {
            if (l.endsWith("/"))
                continue;
            if (l === "mods.toml" || l === "fabric.mod.json" || l === "quilt.mod.json" || l === "mcmod.info")
                return {
                    isMod: !0,
                    reason: `Found mod metadata file: ${l}`,
                    score: 100,
                    signals: [`metadata:${l}`]
                };
            if (l.endsWith(".mixins.json"))
                return {
                    isMod: !0,
                    reason: `Found Mixin configuration: ${l}`,
                    score: 100,
                    signals: [`mixins:${l}`]
                };
            if (l.startsWith("assets/") && !l.startsWith("assets/minecraft/")) {
                if (l.endsWith(".png") || l.endsWith(".ogg"))
                    return {
                        isMod: !0,
                        reason: `Found asset file in mod-specific path: ${l}`,
                        score: 100,
                        signals: [`custom-asset:${l}`]
                    };
                o = !0
            }
            l.startsWith("net/fabricmc/") && (r += ns,
            a.push("fabric-api")),
            l.startsWith("org/spongepowered/asm/mixin/") && (r += ns,
            a.push("mixin-framework")),
            l.startsWith("net/minecraftforge/") && (r += ns,
            a.push("forge-api")),
            (l.includes("/mods/") || l.includes("/mod/")) && (r += at,
            a.push("mod-package"));
            const p = l.toLowerCase();
            for (const x of Ea)
                !n.has(x) && p.includes(x) && n.add(x)
        }
        o && (r += ns,
        a.push("custom-assets")),
        r += n.size * at;
        const d = Array.from(n);
        return r >= ka ? {
            isMod: !0,
            reason: "Heuristic score threshold met.",
            score: r,
            keywords: d,
            signals: a
        } : {
            isMod: !1,
            reason: "Not enough signals to be considered a mod.",
            score: r,
            keywords: d,
            signals: a
        }
    } catch (t) {
        return {
            isMod: !1,
            reason: `Error reading JAR file: ${tinstanceof Error ? t.message : "Unknown error"}`,
            score: -1
        }
    }
}
function sr(s) {
    const t = s.toLowerCase();
    return ["forge", "fabric", "quilt", "optifine", "jei", "nei", "baubles", "mantle", "tconstruct", "thermal", "enderio", "applied", "logistics", "refined", "storage", "actually", "industrial", "craft", "tech", "reborn", "mekanism", "biomes", "plenty", "twilight", "forest", "botania", "thaumcraft", "blood", "magic", "astral", "sorcery", "create", "immersive", "engineering", "railcraft", "computercraft", "opencomputers", "ae2", "gregtech", "geckolib"].some(n => t.includes(n))
}
function tr({open: s, onOpenChange: t}) {
    const [r,n] = i.useState("")
      , [a,o] = i.useState(!1)
      , [d,l] = i.useState(!1)
      , [p,x] = i.useState("")
      , m = gs()
      , c = h => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)
      , u = async h => {
        if (h.preventDefault(),
        !r.trim()) {
            x("Email is required");
            return
        }
        if (!c(r)) {
            x("Please enter a valid email address");
            return
        }
        o(!0),
        x("");
        try {
            m == null || m.capture("secure_scan_interest", {
                email: r,
                email_domain: r.split("@")[1],
                timestamp: new Date().toISOString(),
                feature: "secure_scan_fake_door"
            }),
            await new Promise(g => setTimeout(g, 1e3)),
            l(!0),
            setTimeout( () => {
                t(!1),
                setTimeout( () => {
                    n(""),
                    l(!1),
                    x("")
                }
                , 300)
            }
            , 2e3)
        } catch {
            x("Something went wrong. Please try again.")
        } finally {
            o(!1)
        }
    }
      , f = h => {
        h ? m == null || m.capture("secure_scan_modal_opened", {
            timestamp: new Date().toISOString()
        }) : (m == null || m.capture("secure_scan_modal_closed", {
            email_entered: r.length > 0,
            submitted: d,
            timestamp: new Date().toISOString()
        }),
        setTimeout( () => {
            n(""),
            l(!1),
            x(""),
            o(!1)
        }
        , 300)),
        t(h)
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: f,
        children: e.jsxs(ye, {
            className: "sm:max-w-md",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(ht, {
                        className: "w-5 h-5 text-jar-600"
                    }), "Secure-Scan Coming Soon"]
                }), e.jsx(Ne, {
                    className: "text-left",
                    children: e.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: "We'll unpack your JAR, check every dependency for CVEs, and run 25,000+ YARA rules against hidden malware.<br/><br/>🔒 Want to be first in line? Drop your email and we'll notify you the moment it launches."
                        }
                    })
                })]
            }), d ? e.jsxs("div", {
                className: "text-center py-4",
                children: [e.jsx("div", {
                    className: "text-green-600 font-medium mb-2",
                    children: "✅ You're on the list!"
                }), e.jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "We'll email you as soon as Secure-Scan is ready."
                })]
            }) : e.jsxs("form", {
                onSubmit: u,
                className: "space-y-4",
                children: [e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx(ys, {
                        htmlFor: "email",
                        children: "Email Address"
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx(Nt, {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                        }), e.jsx($e, {
                            id: "email",
                            type: "email",
                            placeholder: "your@email.com",
                            value: r,
                            onChange: h => {
                                n(h.target.value),
                                x("")
                            }
                            ,
                            className: "pl-10",
                            disabled: a
                        })]
                    }), p && e.jsx("p", {
                        className: "text-sm text-red-600",
                        children: p
                    })]
                }), e.jsxs(Ce, {
                    children: [e.jsx(_, {
                        type: "button",
                        variant: "outline",
                        onClick: () => f(!1),
                        disabled: a,
                        children: "Cancel"
                    }), e.jsx(_, {
                        type: "submit",
                        disabled: a,
                        children: a ? e.jsxs(e.Fragment, {
                            children: [e.jsx(Fs, {
                                className: "w-4 h-4 mr-2 animate-spin"
                            }), "Joining..."]
                        }) : "Notify Me"
                    })]
                })]
            })]
        })
    })
}
const Aa = ({jarFile: s, zipInstance: t, onClose: r, onFilesModified: n, modifiedFiles: a, currentViewMode: o, classStrings: d, isExtractingStrings: l, onStringsReverted: p, onSupportClick: x, isReadOnly: m=!1}) => {
    const {isProUser: c} = ke()
      , [u,f] = i.useState([])
      , [h,g] = i.useState(null)
      , [v,b] = i.useState(!1)
      , [N,S] = i.useState(!1)
      , [E,L] = i.useState({
        remaining: 0,
        limit: 0
    })
      , [T,R] = i.useState("")
      , [O,C] = i.useState([])
      , [B,se] = i.useState(!1)
      , W = i.useRef(null)
      , [oe,Q] = i.useState(null)
      , [te] = i.useState( () => `jar_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
      , [le,re] = i.useState(!1)
      , [pe,me] = i.useState(!1)
      , [ee,J] = i.useState(null)
      , H = () => {
        window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
        b(!1),
        S(!1)
    }
      , [z,Y] = i.useState(33)
      , G = i.useRef(!1)
      , q = i.useRef(0)
      , Z = i.useRef(0);
    i.useEffect( () => {
        (async () => {
            const A = new as;
            await A.loadAsync(s),
            W.current = A;
            const y = s.name;
            if (sr(y))
                Q(!0),
                typeof window < "u" && window.posthog && window.posthog.capture("jar_mod_detection", {
                    jar_name: y,
                    is_minecraft_mod: !0,
                    detection_method: "filename",
                    file_size: s.size,
                    timestamp: new Date().toISOString()
                });
            else
                try {
                    const P = await er(A);
                    Q(P.isMod),
                    typeof window < "u" && window.posthog && window.posthog.capture("jar_mod_detection", {
                        jar_name: y,
                        is_minecraft_mod: P.isMod,
                        detection_method: "deep_analysis",
                        detection_score: P.score,
                        detection_reason: P.reason,
                        detection_signals: P.signals,
                        detection_keywords: P.keywords,
                        file_size: s.size,
                        timestamp: new Date().toISOString()
                    })
                } catch (P) {
                    console.error("[JarViewer] Mod detection error:", P),
                    Q(!1),
                    typeof window < "u" && window.posthog && window.posthog.capture("jar_mod_detection_error", {
                        jar_name: y,
                        error_message: P instanceof Error ? P.message : "Unknown error",
                        file_size: s.size,
                        timestamp: new Date().toISOString()
                    })
                }
        }
        )()
    }
    , [s]),
    i.useEffect( () => {
        if (!t) {
            f([]);
            return
        }
        (async A => {
            const y = [];
            A.forEach( (M, F) => {
                var Ze;
                const ue = F.dir
                  , he = M.split("/").pop() || M;
                let Ae = "";
                he.includes(".") && (Ae = (he.split(".").pop() || "").toLowerCase(),
                Ae === "class" && (Ae = "class"));
                const Ke = ue ? 0 : ((Ze = F._data) == null ? void 0 : Ze.uncompressedSize) || 0;
                y.push({
                    name: he,
                    path: M,
                    isDirectory: ue,
                    fileType: Ae,
                    size: Ke
                })
            }
            );
            const I = de(y);
            f(I);
            const P = new Set;
            I.forEach(M => {
                M.isDirectory && M.children && M.children.length > 0 && P.add(M.path)
            }
            )
        }
        )(t)
    }
    , [t]);
    const de = j => {
        const A = []
          , y = {};
        j.forEach(M => {
            M.isDirectory && (y[M.path] = {
                ...M,
                children: []
            })
        }
        ),
        j.forEach(M => {
            if (M.isDirectory)
                return;
            const F = M.path.split("/")
              , ue = F.pop() || ""
              , he = F.join("/") + (F.length > 0 ? "/" : "");
            let Ae = "";
            for (let Ke = 0; Ke < F.length; Ke++) {
                const Ze = F[Ke];
                Ae += Ze + "/",
                y[Ae] || (y[Ae] = {
                    name: Ze,
                    path: Ae,
                    isDirectory: !0,
                    children: [],
                    size: 0
                })
            }
            he === "" ? A.push({
                name: ue,
                path: M.path,
                isDirectory: !1,
                fileType: M.fileType,
                size: M.size
            }) : y[he] && (y[he].children = y[he].children || [],
            y[he].children.push({
                name: ue,
                path: M.path,
                isDirectory: !1,
                fileType: M.fileType,
                size: M.size
            }))
        }
        ),
        Object.keys(y).forEach(M => {
            const F = y[M]
              , ue = M.split("/").filter(he => he !== "");
            if (ue.length === 1)
                A.push(F);
            else {
                const he = ue.slice(0, ue.length - 1).join("/") + "/";
                y[he] && (y[he].children = y[he].children || [],
                y[he].children.find(Ae => Ae.path === F.path) || y[he].children.push(F))
            }
        }
        );
        const I = M => M.sort( (F, ue) => F.isDirectory && !ue.isDirectory ? -1 : !F.isDirectory && ue.isDirectory ? 1 : F.name.localeCompare(ue.name))
          , P = M => I(M).map(ue => ue.children && ue.children.length > 0 ? {
            ...ue,
            children: P(ue.children)
        } : ue);
        return P(A)
    }
      , ae = async j => {
        if (!W.current || !t)
            return;
        const A = W.current.file(j);
        if (A) {
            const y = await A.async("nodebuffer");
            t.file(j, y);
            const I = new Set(a);
            I.delete(j),
            n(I),
            p(j);
            const P = h;
            g(null),
            setTimeout( () => g(P), 0)
        }
    }
      , fe = j => {
        j.preventDefault(),
        G.current = !0,
        q.current = j.clientX,
        Z.current = z,
        document.addEventListener("mousemove", Ee),
        document.addEventListener("mouseup", _e),
        document.body.style.cursor = "ew-resize",
        document.body.style.userSelect = "none"
    }
      , Ie = j => {
        j.preventDefault(),
        G.current = !0,
        q.current = j.touches[0].clientX,
        Z.current = z,
        document.addEventListener("touchmove", ge, {
            passive: !1
        }),
        document.addEventListener("touchend", Re),
        document.body.style.userSelect = "none"
    }
      , Ee = i.useCallback(j => {
        var M;
        if (!G.current)
            return;
        const y = ((M = j.currentTarget.parentElement) == null ? void 0 : M.clientWidth) || window.innerWidth
          , I = j.clientX - q.current
          , P = Math.max(15, Math.min(70, Z.current + I / y * 100));
        Y(P)
    }
    , [])
      , ge = i.useCallback(j => {
        if (!G.current)
            return;
        j.preventDefault();
        const A = window.innerWidth
          , y = j.touches[0].clientX - q.current
          , I = Math.max(15, Math.min(70, Z.current + y / A * 100));
        Y(I)
    }
    , [])
      , _e = i.useCallback( () => {
        G.current = !1,
        document.removeEventListener("mousemove", Ee),
        document.removeEventListener("mouseup", _e),
        document.body.style.cursor = "",
        document.body.style.userSelect = ""
    }
    , [Ee])
      , Re = i.useCallback( () => {
        G.current = !1,
        document.removeEventListener("touchmove", ge),
        document.removeEventListener("touchend", Re),
        document.body.style.userSelect = ""
    }
    , [ge]);
    i.useEffect( () => () => {
        document.removeEventListener("mousemove", Ee),
        document.removeEventListener("mouseup", _e),
        document.removeEventListener("touchmove", ge),
        document.removeEventListener("touchend", Re),
        document.body.style.cursor = "",
        document.body.style.userSelect = ""
    }
    , [Ee, _e, ge, Re]);
    const w = j => {
        L({
            remaining: 0,
            limit: j
        }),
        b(!0)
    }
      , D = (j, A) => {
        L({
            remaining: j,
            limit: A
        }),
        c || S(!0)
    }
      , X = (j, A) => {
        C(j),
        R(A),
        se(!0)
    }
      , $ = () => {
        R(""),
        C([]),
        se(!1)
    }
      , K = j => {
        if (!B || !T || !j)
            return j;
        try {
            const A = T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              , y = j.split(new RegExp(`(${A})`,"gi"));
            return y.length <= 1 ? j : y.map( (I, P) => I.toLowerCase() === T.toLowerCase() ? e.jsx("mark", {
                className: "bg-yellow-200 px-0",
                children: I
            }, P) : I)
        } catch (A) {
            return console.error("Error highlighting content:", A),
            j
        }
    }
      , ce = async j => {
        if (!t)
            return;
        const A = t.file(j);
        if (A) {
            if (!c && await Qt(A)) {
                J(j),
                me(!0);
                return
            }
            await ne(j)
        }
    }
      , ne = async j => {
        if (!t)
            return;
        const A = t.file(j);
        if (A)
            try {
                const y = await A.async("blob")
                  , I = j.split("/").pop() || j;
                Me.saveAs(y, I)
            } catch (y) {
                console.error("Error downloading file:", y)
            }
    }
      , xe = async () => {
        ee && (await ne(ee),
        me(!1),
        J(null))
    }
      , k = () => {
        me(!1),
        J(null)
    }
    ;
    return e.jsxs("div", {
        className: "flex flex-col h-full border rounded-md overflow-hidden",
        children: [e.jsx(Dn, {
            isOpen: v,
            onClose: () => b(!1),
            dailyLimit: E.limit,
            onUpgradeToPro: H
        }), e.jsx(Rn, {
            isOpen: N,
            onClose: () => S(!1),
            remainingDecompiles: E.remaining,
            dailyLimit: E.limit,
            onUpgradeToPro: H
        }), e.jsx(tr, {
            open: le,
            onOpenChange: re
        }), e.jsx(Vs, {
            isOpen: pe,
            onClose: k,
            onConfirm: xe,
            fileName: (ee == null ? void 0 : ee.split("/").pop()) || ""
        }), e.jsxs("div", {
            className: "flex-1 flex flex-row overflow-hidden jar-viewer-container",
            children: [e.jsx("div", {
                style: {
                    width: `${z}%`
                },
                children: e.jsx(On, {
                    entries: u,
                    zipInstance: t,
                    selectedFile: h,
                    modifiedFiles: a,
                    onSelectFile: g,
                    onSearch: X,
                    onClearSearch: $,
                    searchMatches: O,
                    isSearchActive: B,
                    onSupportClick: x,
                    jarInstanceId: te
                })
            }), e.jsx("div", {
                className: "w-1 hover:bg-jar-200 cursor-ew-resize flex items-center justify-center relative",
                onMouseDown: fe,
                onTouchStart: Ie,
                children: e.jsx("div", {
                    className: "absolute inset-0 -inset-x-3 md:-inset-x-1 min-h-[44px] flex items-center justify-center",
                    children: e.jsx("div", {
                        className: "w-8 h-8 md:w-1 md:h-8 bg-gray-300 md:bg-gray-300 rounded-full md:rounded-full flex items-center justify-center transition-colors hover:bg-gray-400",
                        children: e.jsxs("div", {
                            className: "flex flex-col md:hidden space-y-0.5",
                            children: [e.jsx("div", {
                                className: "w-1 h-1 bg-gray-600 rounded-full"
                            }), e.jsx("div", {
                                className: "w-1 h-1 bg-gray-600 rounded-full"
                            }), e.jsx("div", {
                                className: "w-1 h-1 bg-gray-600 rounded-full"
                            })]
                        })
                    })
                })
            }), e.jsx("div", {
                className: "flex-1 overflow-hidden flex flex-col bg-white",
                children: e.jsx(Ca, {
                    selectedFile: h,
                    zipInstance: t,
                    entries: u,
                    modifiedFiles: a,
                    onFilesModified: n,
                    onRevertFile: ae,
                    onDownloadFile: ce,
                    onDecompileLimit: w,
                    onDecompileSuccess: D,
                    isSearchActive: B,
                    searchQuery: T,
                    highlightSearchMatches: K,
                    jarName: s.name,
                    jarInstanceId: te,
                    isMinecraftMod: oe,
                    isReadOnly: m
                })
            })]
        })]
    })
}
;
function We(s, t) {
    if (t <= 0 || t >= s.length || !s[t])
        return `INVALID/MISSING_INDEX_${t}`;
    let r = s[t];
    if (r.tag === ie.ConstantType.STRING) {
        const n = r.string_index;
        if (typeof n != "number" || n <= 0 || n >= s.length || !s[n])
            return console.warn(`[java-utils] Invalid or missing string_index in CONSTANT_String at index ${t}: ${n}`),
            "INVALID_STRING_INDEX";
        r = s[n]
    }
    if (r.tag === ie.ConstantType.UTF8) {
        const n = r.bytes;
        if (!n)
            return console.warn(`[java-utils] Missing bytes in UTF8 entry at index ${t}`),
            "MISSING_BYTES";
        try {
            const a = n instanceof Uint8Array ? n : new Uint8Array(n);
            return lt.utf8ByteArrayToString(a)
        } catch (a) {
            return console.error(`[java-utils] Error decoding UTF8 at index ${t}:`, a),
            "DECODING_ERROR"
        }
    } else
        return `NON_UTF8_ENTRY(tag:${r.tag})`
}
function Ia(s, t, r) {
    return t ? t.find(a => a != null && a.attribute_name_index ? We(s, a.attribute_name_index) === r : !1) : void 0
}
function Ta(s, t) {
    if (s <= 0 || s >= t.length || !t[s])
        return console.warn(`[java-utils] Invalid or missing this_class_index: ${s}`),
        "INVALID_CLASS_INDEX";
    const r = t[s]
      , n = r.name_index;
    return r.tag !== ie.ConstantType.CLASS || typeof n != "number" ? (console.warn(`[java-utils] Entry at this_class_index ${s} is not a valid ClassInfo. Tag: ${r.tag}`),
    "INVALID_CLASS_INFO") : We(t, n)
}
function rr(s, t) {
    let r, n;
    if (typeof s == "number") {
        if (s <= 0 || s >= t.length || !t[s])
            return {
                name: "INVALID_METHOD_INDEX",
                descriptor: "()V"
            };
        const d = t[s]
          , l = d.name_and_type_index;
        if (d.tag !== ie.ConstantType.METHODREF || typeof l != "number")
            return {
                name: "INVALID_METHODREF",
                descriptor: "()V"
            };
        if (l <= 0 || l >= t.length || !t[l])
            return {
                name: "INVALID_NAT_INDEX",
                descriptor: "()V"
            };
        const p = t[l];
        if (p.tag === ie.ConstantType.NAME_AND_TYPE)
            r = p.name_index,
            n = p.descriptor_index;
        else
            return {
                name: "INVALID_NAT_ENTRY",
                descriptor: "()V"
            }
    } else
        r = s.name_index,
        n = s.descriptor_index;
    const a = typeof r == "number" ? We(t, r) : "UNKNOWN_METHOD"
      , o = typeof n == "number" ? We(t, n) : "()V";
    return {
        name: a,
        descriptor: o
    }
}
const ds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, -1, -1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 1, 2, 0, 0, 2, 2, 0, 0, -1, 3, 2, 2, 4, 4, 0];
for (let s = ds.length; s <= 255; s++)
    (s === ie.Opcode.BREAKPOINT || s === ie.Opcode.IMPDEP1 || s === ie.Opcode.IMPDEP2) && (ds[s] = 0);
function Pa(s, t, r) {
    const n = ds[s];
    if (n !== void 0 && n >= 0)
        return 1 + n;
    switch (s) {
    case ie.Opcode.TABLESWITCH:
        {
            const a = (r + 1) % 4 ? 4 - (r + 1) % 4 : 0
              , o = r + 1 + a;
            if (o + 11 >= t.length)
                return 1;
            const d = t[o + 4] << 24 | t[o + 5] << 16 | t[o + 6] << 8 | t[o + 7]
              , p = (t[o + 8] << 24 | t[o + 9] << 16 | t[o + 10] << 8 | t[o + 11]) - d + 1;
            return p < 0 ? 1 : 1 + a + 12 + p * 4
        }
    case ie.Opcode.LOOKUPSWITCH:
        {
            const a = (r + 1) % 4 ? 4 - (r + 1) % 4 : 0
              , o = r + 1 + a;
            if (o + 7 >= t.length)
                return 1;
            const d = t[o + 4] << 24 | t[o + 5] << 16 | t[o + 6] << 8 | t[o + 7];
            return d < 0 ? 1 : 1 + a + 8 + d * 8
        }
    case ie.Opcode.WIDE:
        return r + 1 >= t.length ? 1 : t[r + 1] === ie.Opcode.IINC ? 6 : 4;
    default:
        return console.warn(`[String Extractor] Unknown opcode size for: ${s}`),
        1
    }
}
const _a = new ie.JavaClassFileReader;
let Os = 0;
async function Ra(s, t) {
    const r = new Uint8Array(t)
      , n = _a.read(r)
      , a = n.constant_pool
      , o = []
      , d = new Set
      , l = Ta(n.this_class, a);
    for (const p of n.methods) {
        if ((p.access_flags & ie.Modifier.ABSTRACT) !== 0 || Da(n, p, a))
            continue;
        const m = Ia(a, p.attributes, "Code");
        if (!(m != null && m.code))
            continue;
        const c = m.code instanceof Uint8Array ? m.code : new Uint8Array(m.code)
          , u = rr(p, a);
        let f = 0
          , h = 0;
        for (; h < c.length; ) {
            const g = c[h];
            let v = 1;
            if (g === ie.Opcode.LDC)
                if (h + 1 < c.length) {
                    const b = c[h + 1];
                    v = 2;
                    const N = a[b];
                    if ((N == null ? void 0 : N.tag) === ie.ConstantType.STRING && !d.has(b)) {
                        const S = We(a, b)
                          , E = void 0;
                        o.push({
                            id: Os++,
                            value: S,
                            originalValue: S,
                            constantIndex: b,
                            changed: !1,
                            location: {
                                filePath: s,
                                className: l,
                                methodName: u.name,
                                methodDescriptor: u.descriptor,
                                lineNumber: E
                            },
                            instructionIndex: f
                        }),
                        d.add(b)
                    }
                } else
                    v = c.length - h;
            else if (g === ie.Opcode.LDC_W)
                if (h + 2 < c.length) {
                    const b = c[h + 1] << 8 | c[h + 2];
                    v = 3;
                    const N = a[b];
                    if ((N == null ? void 0 : N.tag) === ie.ConstantType.STRING && !d.has(b)) {
                        const S = We(a, b)
                          , E = void 0;
                        o.push({
                            id: Os++,
                            value: S,
                            originalValue: S,
                            constantIndex: b,
                            changed: !1,
                            location: {
                                filePath: s,
                                className: l,
                                methodName: u.name,
                                methodDescriptor: u.descriptor,
                                lineNumber: E
                            },
                            instructionIndex: f
                        }),
                        d.add(b)
                    }
                } else
                    v = c.length - h;
            else
                v = Pa(g, c, h);
            v <= 0 && (console.warn(`[String Extractor] Invalid opcode size ${v} for opcode ${g} at index ${h} in ${s}#${u.name}`),
            v = 1),
            h += v,
            f++
        }
    }
    return o
}
function Da(s, t, r) {
    if ((s.access_flags & ie.Modifier.ENUM) === 0)
        return !1;
    const {name: n, descriptor: a} = rr(t, r);
    return n === "<clinit>" && a === "()V"
}
async function La(s, t) {
    const r = s.file(/\.class$/i)
      , n = r.length;
    let a = 0;
    const o = [];
    Os = 0,
    console.log(`[String Extractor] Found ${n} class files.`);
    for (const d of r) {
        try {
            const l = await d.async("arraybuffer")
              , p = await Ra(d.name, l);
            o.push(...p)
        } catch (l) {
            console.error(`[String Extractor] Failed to process class: ${d.name}`, l)
        }
        a++,
        t && (a % 20 === 0 || a === n) && t({
            total: n,
            done: a
        })
    }
    return console.log(`[String Extractor] Extracted ${o.length} unique strings.`),
    o
}
const nr = i.forwardRef( ({className: s, children: t, ...r}, n) => e.jsxs(Ot, {
    ref: n,
    className: V("relative overflow-hidden", s),
    ...r,
    children: [e.jsx(Qr, {
        className: "h-full w-full rounded-[inherit]",
        children: t
    }), e.jsx(ar, {}), e.jsx(en, {})]
}));
nr.displayName = Ot.displayName;
const ar = i.forwardRef( ({className: s, orientation: t="vertical", ...r}, n) => e.jsx(Mt, {
    ref: n,
    orientation: t,
    className: V("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", s),
    ...r,
    children: e.jsx(sn, {
        className: "relative flex-1 rounded-full bg-border"
    })
}));
ar.displayName = Mt.displayName;
const Oa = ({stringData: s, onUpdateString: t, isModified: r, onRevertString: n}) => {
    const [a,o] = i.useState(s.value)
      , d = i.useRef(null);
    i.useEffect( () => {
        s.value !== a && o(s.value)
    }
    , [s.value]);
    const l = m => {
        const c = m.target.value;
        o(c),
        t(s.id, c)
    }
      , p = m => {
        m.stopPropagation(),
        n(s.id)
    }
      , x = `${s.location.className.split("/").pop()}#${s.location.methodName}`;
    return e.jsxs("div", {
        className: V("text-xs p-2 border-b border-dashed border-slate-200 flex flex-col", r ? "bg-blue-50" : "bg-white"),
        children: [e.jsxs("div", {
            className: "flex items-center gap-1",
            children: [" ", e.jsx($e, {
                ref: d,
                type: "text",
                value: a,
                onChange: l,
                className: V("flex-1 h-6 text-xs font-mono px-1 py-0 border focus-visible:ring-1 focus-visible:ring-blue-500", r ? "border-blue-300 bg-white" : "border-transparent bg-transparent hover:border-slate-200 focus:bg-white"),
                spellCheck: !1,
                title: a
            }), r && e.jsx(_, {
                variant: "ghost",
                size: "icon",
                className: "h-5 w-5 text-blue-600 hover:bg-blue-100",
                onClick: p,
                title: "Revert changes to this string",
                children: e.jsx(Lt, {
                    size: 12
                })
            })]
        }), e.jsxs("p", {
            className: "text-slate-500 truncate mt-0.5 text-[11px]",
            title: `${s.location.filePath}
${s.location.className}#${s.location.methodName}${s.location.methodDescriptor}${s.location.lineNumber ? ` (L:${s.location.lineNumber})` : ""}`,
            children: [x, s.location.lineNumber && ` (L:${s.location.lineNumber})`]
        })]
    })
}
  , Ma = ({strings: s, onStringChange: t, onRevertString: r}) => {
    const [n,a] = i.useState("")
      , [o,d] = i.useState("");
    i.useEffect( () => {
        const c = setTimeout( () => {
            d(n)
        }
        , 300);
        return () => {
            clearTimeout(c)
        }
    }
    , [n]);
    const l = i.useCallback( (c, u) => {
        t(c, u)
    }
    , [t])
      , p = c => {
        a(c.target.value)
    }
      , x = i.useMemo( () => (console.log("[ClassStringList] Recalculating filtered strings..."),
    s.filter(c => c.value.toLowerCase().includes(o.toLowerCase()))), [s, o])
      , m = x;
    return console.log("ClassStringList: Strings before sort (first 10):", s.slice(0, 10).map(c => c.value)),
    console.log("ClassStringList: Strings after sort (first 10):", m.slice(0, 10).map(c => c.value)),
    e.jsxs("div", {
        className: "flex flex-col h-full border-r bg-slate-50",
        children: [e.jsxs("div", {
            className: "p-3 border-b bg-gray-50",
            children: [e.jsx("h4", {
                className: "text-sm font-semibold mb-1",
                children: "Class String Constants"
            }), e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "This view presents string constants extracted directly from the `.class` file bytecode. Search the list to inspect values such as configuration settings, API URLs, or UI labels without needing to decompile or rebuild the original JAR archive."
            })]
        }), e.jsx("div", {
            className: "p-2 border-b",
            children: e.jsx($e, {
                type: "text",
                placeholder: `Search ${s.length} strings...`,
                className: "w-full px-2 py-1 border rounded-md text-sm h-8",
                value: n,
                onChange: p
            })
        }), e.jsx(nr, {
            className: "flex-1 p-2",
            children: e.jsx("div", {
                className: "space-y-1",
                children: m.length > 0 ? m.map(c => e.jsx(Oa, {
                    stringData: c,
                    onUpdateString: l,
                    isModified: !!c.changed,
                    onRevertString: r
                }, c.id)) : e.jsx("div", {
                    className: "p-4 text-center text-sm text-slate-500",
                    children: s.length === 0 ? "No class strings found or loaded." : n && x.length === 0 ? `No strings match "${n}".` : ""
                })
            })
        })]
    })
}
  , Ua = new ie.JavaClassFileReader
  , Fa = new ie.JavaClassFileWriter;
async function ks(s, t) {
    if (!t || t.length === 0)
        return console.log("[String Writer] No changed strings to write."),
        new Set;
    console.log(`[String Writer] Starting to write ${t.length} modified strings.`);
    const r = new Map;
    for (const o of t) {
        const d = o.location.filePath;
        r.has(d) || r.set(d, []),
        r.get(d).push(o)
    }
    const n = new Set
      , a = [];
    for (const [o,d] of r.entries()) {
        const l = (async () => {
            const p = s.file(o);
            if (!p) {
                console.error(`[String Writer] File not found in zip: ${o}`);
                return
            }
            try {
                console.log(`[String Writer] Processing ${o}...`);
                const x = await p.async("arraybuffer")
                  , m = Ua.read(new Uint8Array(x))
                  , c = m.constant_pool;
                let u = !1;
                for (const f of d) {
                    const h = f.constantIndex;
                    if (h <= 0 || h >= c.length || !c[h]) {
                        console.warn(`[String Writer] Invalid constant index ${h} for string ID ${f.id} in ${o}`);
                        continue
                    }
                    const g = c[h];
                    if (g.tag !== ie.ConstantType.STRING) {
                        console.warn(`[String Writer] Entry at index ${h} is not CONSTANT_String for string ID ${f.id} in ${o}`);
                        continue
                    }
                    const v = g == null ? void 0 : g.string_index;
                    if (typeof v != "number" || v <= 0 || v >= c.length || !c[v]) {
                        console.warn(`[String Writer] Invalid utf8_index ${v} for string ID ${f.id} in ${o}`);
                        continue
                    }
                    const b = c[v];
                    if (b.tag !== ie.ConstantType.UTF8) {
                        console.warn(`[String Writer] Entry at utf8_index ${v} is not CONSTANT_Utf8 for string ID ${f.id} in ${o}`);
                        continue
                    }
                    const N = lt.stringToUtf8ByteArray(f.value);
                    b.bytes = Array.from(N),
                    b.length = N.length,
                    u = !0,
                    console.log(`[String Writer] Updated string at index ${v} in ${o}`)
                }
                if (u) {
                    const f = Fa.write(m).buffer;
                    s.file(o, f),
                    n.add(o),
                    console.log(`[String Writer] Re-wrote modified class file: ${o}`)
                }
            } catch (x) {
                throw console.error(`[String Writer] Error processing file ${o}:`, x),
                new Error(`Failed to write strings for ${o}: ${x}`)
            }
        }
        )();
        a.push(l)
    }
    return await Promise.all(a),
    console.log(`[String Writer] Finished writing modifications to ${n.size} files.`),
    n
}
const $a = ({className: s=""}) => {
    const [t,r] = i.useState(!1)
      , n = () => {
        r(!0)
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsx("button", {
            onClick: n,
            className: `text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium cursor-pointer bg-transparent border-none p-0 ${s}`,
            title: "Learn about ad-free Pro version",
            children: "Hide Ads"
        }), e.jsx(Bt, {
            isOpen: t,
            onClose: () => r(!1)
        })]
    })
}
  , za = ({onClick: s, className: t=""}) => e.jsxs("button", {
    onClick: s,
    className: `inline-flex items-center gap-1.5 px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-md text-xs font-semibold cursor-pointer transition-colors border border-amber-300 ${t}`,
    title: "Click to learn about read-only mode",
    children: [e.jsx(Ps, {
        className: "h-3 w-3"
    }), e.jsx("span", {
        children: "Read-Only"
    })]
})
  , Ja = ({isOpen: s, onClose: t, timeUntilReset: r}) => {
    const n = () => {
        window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer")
    }
      , a = () => {
        window.open("/pro", "_blank", "noopener,noreferrer")
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: t,
        children: e.jsxs(ye, {
            className: "sm:max-w-lg",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(Ps, {
                        className: "h-5 w-5 text-amber-500"
                    }), e.jsx("span", {
                        children: "Read-Only Mode Active"
                    })]
                }), e.jsx(Ne, {
                    children: "This JAR file opened in read-only mode because you've reached your daily upload limit."
                })]
            }), e.jsxs("div", {
                className: "flex flex-col space-y-4 py-4",
                children: [e.jsxs("div", {
                    className: "bg-amber-50 p-4 rounded-md border border-amber-200",
                    children: [e.jsxs("h4", {
                        className: "font-medium text-amber-900 mb-2 flex items-center gap-2",
                        children: [e.jsx(Ps, {
                            className: "h-4 w-4"
                        }), "What is Read-Only Mode?"]
                    }), e.jsxs("p", {
                        className: "text-sm text-amber-800",
                        children: ["Free users can upload ", e.jsx("strong", {
                            children: "1 JAR per day"
                        }), ". After reaching this limit, additional JARs open in read-only mode where editing and exporting are disabled."]
                    })]
                }), e.jsxs("div", {
                    className: "bg-green-50 p-4 rounded-md border border-green-200",
                    children: [e.jsx("h4", {
                        className: "font-medium text-green-900 mb-2",
                        children: "What You Can Do"
                    }), e.jsxs("ul", {
                        className: "text-sm text-green-800 space-y-1.5",
                        children: [e.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [e.jsx(tn, {
                                className: "h-4 w-4 mt-0.5 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Browse and view all files in the JAR"
                            })]
                        }), e.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [e.jsx(bt, {
                                className: "h-4 w-4 mt-0.5 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Search file contents"
                            })]
                        }), e.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [e.jsx(Oe, {
                                className: "h-4 w-4 mt-0.5 flex-shrink-0"
                            }), e.jsx("span", {
                                children: "Decompile class files (limits apply)"
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "bg-red-50 p-4 rounded-md border border-red-200",
                    children: [e.jsx("h4", {
                        className: "font-medium text-red-900 mb-2",
                        children: "Disabled in Read-Only Mode"
                    }), e.jsxs("ul", {
                        className: "text-sm text-red-800 space-y-1",
                        children: [e.jsx("li", {
                            children: "• Editing files"
                        }), e.jsx("li", {
                            children: "• Saving changes"
                        }), e.jsx("li", {
                            children: "• Exporting modified JAR"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-md border border-purple-200",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [e.jsx(be, {
                            className: "h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5"
                        }), e.jsxs("div", {
                            className: "flex-1",
                            children: [e.jsx("h4", {
                                className: "font-medium text-purple-900 mb-1",
                                children: "Pro Users Get"
                            }), e.jsxs("ul", {
                                className: "text-sm text-purple-800 space-y-1 mb-2",
                                children: [e.jsxs("li", {
                                    children: ["✓ ", e.jsx("strong", {
                                        children: "Unlimited JAR uploads"
                                    })]
                                }), e.jsx("li", {
                                    children: "✓ Unlimited decompilation"
                                }), e.jsx("li", {
                                    children: "✓ No restrictions or limits"
                                })]
                            }), e.jsx("button", {
                                onClick: a,
                                className: "text-xs text-purple-700 hover:text-purple-900 underline font-medium bg-transparent border-none p-0 cursor-pointer",
                                children: "Learn more about Pro features →"
                            })]
                        })]
                    })
                }), e.jsxs("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-md p-3 flex items-center justify-center",
                    children: [e.jsx(He, {
                        className: "h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    }), e.jsxs("p", {
                        className: "text-sm text-blue-700",
                        children: ["Upload limit resets in: ", e.jsxs("span", {
                            className: "font-bold text-base",
                            children: [r.hours, "h ", r.minutes, "m ", r.seconds, "s"]
                        })]
                    })]
                })]
            }), e.jsxs(Ce, {
                className: "sm:justify-between flex-col sm:flex-row gap-2",
                children: [e.jsx(_, {
                    variant: "outline",
                    onClick: t,
                    children: "Continue Viewing"
                }), e.jsxs("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [e.jsxs(_, {
                        onClick: n,
                        className: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
                        children: [e.jsx(be, {
                            className: "mr-2 h-4 w-4"
                        }), "Upgrade to Pro"]
                    }), e.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "Free Trial • Cancel Anytime"
                    })]
                })]
            })]
        })
    })
}
  , Va = ({disabled: s, modifiedFilesCount: t, hasStringChanges: r, isProUser: n, onExportJar: a, onExportZip: o, tooltip: d}) => {
    const [l,p] = i.useState(!1)
      , [x,m] = i.useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
      , c = t > 0 || r
      , u = n || Be(U.JAR_EXPORT.featureId, U.JAR_EXPORT.dailyLimit)
      , [f,h] = i.useState(!0);
    i.useEffect( () => {
        l && h(!0)
    }
    , [l]),
    i.useEffect( () => {
        if (!l || u)
            return;
        const b = () => {
            const S = new Date
              , E = new Date;
            E.setHours(24, 0, 0, 0);
            const L = E.getTime() - S.getTime()
              , T = Math.floor(L / (1e3 * 60 * 60))
              , R = Math.floor(L % (1e3 * 60 * 60) / (1e3 * 60))
              , O = Math.floor(L % (1e3 * 60) / 1e3);
            return {
                hours: T,
                minutes: R,
                seconds: O
            }
        }
        ;
        m(b());
        const N = setInterval( () => {
            m(b())
        }
        , 1e3);
        return () => clearInterval(N)
    }
    , [l, u]);
    const g = () => {
        s || p(!0)
    }
      , v = (b, N=!0) => {
        if (p(!1),
        !n && c && N && !Be(U.JAR_EXPORT.featureId, U.JAR_EXPORT.dailyLimit)) {
            console.error("Export attempted when daily limit reached - UI should prevent this");
            return
        }
        b === "jar" ? a(N) : o(N)
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(_, {
            variant: "outline",
            size: "sm",
            className: "border-jar-200 text-jar-600 hover:bg-jar-50 h-8",
            title: d,
            onClick: g,
            disabled: s,
            children: [e.jsx(qe, {
                size: 16,
                className: "md:mr-1.5"
            }), e.jsx("span", {
                className: "hidden md:inline text-sm",
                children: "Export JAR"
            }), c && e.jsx("span", {
                className: "ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold rounded-full bg-jar-100 text-jar-700",
                children: t
            })]
        }), e.jsx(we, {
            open: l,
            onOpenChange: p,
            children: e.jsxs(ye, {
                className: "sm:max-w-lg",
                children: [e.jsx(ve, {
                    children: e.jsxs(je, {
                        className: "flex items-center gap-2",
                        children: [e.jsx(qe, {
                            className: "h-5 w-5 text-jar-600"
                        }), "Choose Export Format"]
                    })
                }), c && e.jsxs("div", {
                    className: "py-4",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [e.jsx("input", {
                            type: "checkbox",
                            id: "includeModifications",
                            checked: f,
                            onChange: b => {
                                const N = b.target.checked;
                                console.log("Checkbox clicked:", N, "canUseJarExport:", u, "isProUser:", n),
                                h(N)
                            }
                            ,
                            className: "rounded border-gray-300 text-jar-600 focus:ring-jar-500"
                        }), e.jsxs("label", {
                            htmlFor: "includeModifications",
                            className: "font-medium flex items-center gap-1",
                            children: ["Include Modified files", e.jsx("span", {
                                className: "bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold",
                                children: t
                            })]
                        })]
                    }), f && !n && !u && e.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [e.jsxs("p", {
                            className: "text-sm text-gray-700 mb-3",
                            children: ["You've used all ", U.JAR_EXPORT.dailyLimit, " of your free JAR exports for today. Modified files cannot be included in exports."]
                        }), e.jsxs("div", {
                            className: "bg-blue-50 border border-blue-100 rounded-md p-3 mb-3 flex items-center",
                            children: [e.jsx(He, {
                                className: "h-4 w-4 text-blue-500 mr-2 flex-shrink-0"
                            }), e.jsxs("p", {
                                className: "text-sm text-blue-700",
                                children: ["Limit resets in: ", e.jsxs("span", {
                                    className: "font-medium",
                                    children: [x.hours, "h ", x.minutes, "m ", x.seconds, "s"]
                                })]
                            })]
                        }), e.jsxs("button", {
                            className: "w-full text-left bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-md p-3 hover:from-purple-100 hover:to-indigo-100 transition-colors",
                            onClick: () => window.open("https://techigor.gumroad.com/l/JarEditorOnlinePro", "_blank", "noopener,noreferrer"),
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [e.jsx(be, {
                                    className: "h-4 w-4 text-purple-600"
                                }), e.jsx("span", {
                                    className: "font-medium text-purple-800",
                                    children: "Upgrade to Pro →"
                                }), e.jsx("span", {
                                    className: "ml-auto bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold",
                                    children: "SALE"
                                })]
                            }), e.jsx("p", {
                                className: "text-sm text-purple-700",
                                children: "Get unlimited JAR exports and skip all daily limits with JAR Tools Pro."
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "space-y-3",
                    children: [e.jsxs("button", {
                        className: `w-full text-left p-4 border rounded-lg transition-colors ${!n && c && f && !u ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" : "border-gray-200 hover:bg-gray-50"}`,
                        onClick: () => v("jar", f),
                        disabled: !n && c && f && !u,
                        title: !n && c && f && !u ? "Daily export limit reached. Upgrade to Pro for unlimited exports." : "",
                        children: [e.jsx("div", {
                            className: "font-medium mb-1",
                            children: "JAR"
                        }), e.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: c && f ? `Including ${t} modified files` : "Original files"
                        })]
                    }), e.jsxs("button", {
                        className: `w-full text-left p-4 border rounded-lg transition-colors ${!n && c && f && !u ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" : "border-gray-200 hover:bg-gray-50"}`,
                        onClick: () => v("zip", f),
                        disabled: !n && c && f && !u,
                        title: !n && c && f && !u ? "Daily export limit reached. Upgrade to Pro for unlimited exports." : "",
                        children: [e.jsx("div", {
                            className: "font-medium mb-1",
                            children: "ZIP"
                        }), e.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: c && f ? `Including ${t} modified files` : "Original files"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
                    children: e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-sm text-blue-800 mb-2",
                            children: e.jsx("strong", {
                                children: "Need to decompile all classes?"
                            })
                        }), e.jsx("p", {
                            className: "text-xs text-blue-700 mb-3",
                            children: "Try our JAR Decompiler to convert entire JARs to readable Java source code."
                        }), e.jsxs("a", {
                            href: "/jar-decompiler",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 hover:underline",
                            children: ["Try JAR Decompiler", e.jsx(Us, {
                                className: "h-3 w-3"
                            })]
                        })]
                    })
                }), e.jsx(Ce, {
                    children: e.jsx(_, {
                        variant: "outline",
                        onClick: () => {
                            p(!1),
                            h(!0)
                        }
                        ,
                        children: "Cancel"
                    })
                })]
            })
        })]
    })
}
  , Ba = ({isOpen: s, onClose: t}) => {
    const [r,n] = i.useState("")
      , [a,o] = i.useState(!1)
      , [d,l] = i.useState(!1)
      , p = gs()
      , x = async () => {
        if (r.trim()) {
            o(!0);
            try {
                p == null || p.capture("support_message_sent", {
                    message: r.trim(),
                    timestamp: new Date().toISOString(),
                    page: "jar_viewer",
                    user_agent: navigator.userAgent
                }),
                l(!0),
                n(""),
                setTimeout( () => {
                    t(),
                    l(!1)
                }
                , 2e3)
            } catch (c) {
                console.error("Error sending support message:", c)
            } finally {
                o(!1)
            }
        }
    }
      , m = () => {
        n(""),
        l(!1),
        t()
    }
    ;
    return e.jsx(we, {
        open: s,
        onOpenChange: m,
        children: e.jsxs(ye, {
            className: "sm:max-w-md",
            children: [e.jsxs(ve, {
                children: [e.jsxs(je, {
                    className: "flex items-center gap-2",
                    children: [e.jsx(yt, {
                        size: 20
                    }), "Support"]
                }), e.jsx(Ne, {
                    children: "Send us your feedback, bug reports, or feature requests."
                })]
            }), d ? e.jsxs("div", {
                className: "py-8 text-center",
                children: [e.jsx("div", {
                    className: "text-green-600 font-medium",
                    children: "Message sent successfully!"
                }), e.jsx("div", {
                    className: "text-sm text-gray-500 mt-1",
                    children: "Thank you for your feedback."
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "py-4",
                    children: e.jsx(Le, {
                        value: r,
                        onChange: c => n(c.target.value),
                        placeholder: "Describe your issue, feedback, or suggestion...",
                        className: "min-h-[120px] resize-none",
                        disabled: a
                    })
                }), e.jsxs(Ce, {
                    children: [e.jsx(_, {
                        variant: "outline",
                        onClick: m,
                        disabled: a,
                        children: "Cancel"
                    }), e.jsx(_, {
                        onClick: x,
                        disabled: !r.trim() || a,
                        className: "bg-blue-600 hover:bg-blue-700",
                        children: a ? e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            }), "Sending..."]
                        }) : "Send"
                    })]
                })]
            })]
        })
    })
}
;
class Wa extends i.Component {
    constructor() {
        super(...arguments);
        Ge(this, "state", {
            hasError: !1,
            error: null
        })
    }
    static getDerivedStateFromError(r) {
        return {
            hasError: !0,
            error: r
        }
    }
    componentDidCatch(r, n) {
        console.error("JarViewer error:", r, n)
    }
    render() {
        return this.state.hasError ? this.props.fallback || e.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center p-8 text-center",
            children: [e.jsx("div", {
                className: "bg-red-50 rounded-full p-4 mb-4",
                children: e.jsx(Ut, {
                    size: 40,
                    className: "text-red-500"
                })
            }), e.jsx("h3", {
                className: "text-xl font-semibold text-gray-800 mb-2",
                children: "Something went wrong"
            }), e.jsx("p", {
                className: "text-gray-600 mb-4",
                children: "We encountered an issue processing your JAR file."
            }), e.jsxs("p", {
                className: "text-sm text-gray-500 mb-6",
                children: ["Technical details: ", String(this.state.error)]
            }), e.jsx("button", {
                onClick: () => this.setState({
                    hasError: !1,
                    error: null
                }),
                className: "px-4 py-2 bg-jar-500 text-white rounded-md hover:bg-jar-600 transition-colors",
                children: "Try Again"
            })]
        }) : this.props.children
    }
}
const Ha = () => {
    const s = ot()
      , t = it()
      , {isProUser: r, deactivateLicense: n, activateLicense: a} = ke()
      , o = zt()
      , [d,l] = i.useState( () => {
        const k = t.state;
        return (k == null ? void 0 : k.jarFile) || null
    }
    )
      , [p,x] = i.useState( () => {
        const k = t.state;
        return (k == null ? void 0 : k.isReadOnly) || !1
    }
    );
    Te.useEffect( () => {
        r && x(!1)
    }
    , [r]);
    const [m,c] = i.useState(!1)
      , u = i.useRef(null)
      , f = i.useRef(null)
      , [h,g] = i.useState(null)
      , [v,b] = i.useState([])
      , [N,S] = i.useState(!1)
      , [E,L] = i.useState(null)
      , [T,R] = i.useState("jar")
      , [O,C] = i.useState(new Set)
      , [B,se] = i.useState(null)
      , [W,oe] = i.useState(!1)
      , [Q,te] = i.useState(null)
      , [le,re] = i.useState("")
      , [pe,me] = i.useState(!1)
      , [ee,J] = i.useState(!1)
      , [H,z] = i.useState(null)
      , [Y,G] = i.useState(!1)
      , [q,Z] = i.useState(!1)
      , [de,ae] = i.useState(null)
      , [fe,Ie] = i.useState(!1)
      , Ee = (k, j) => {
        if (k.name.toLowerCase().endsWith(".class")) {
            s("/class-decompiler", {
                state: {
                    uploadedFile: k,
                    fromJarUploader: !0
                }
            });
            return
        }
        ae(null),
        c(!0),
        l(k),
        x(j || !1),
        g(null),
        b([]),
        S(!1),
        L(null),
        R("jar"),
        C(new Set),
        oe(!1),
        te(null),
        re(""),
        G(!1),
        Z(!1),
        u.current && u.current.setState({
            hasError: !1,
            error: null
        }),
        f.current && clearTimeout(f.current),
        f.current = window.setTimeout( () => {
            c(!1),
            f.current = null,
            console.log("Loading timeout triggered - forcing load complete")
        }
        , 15e3)
    }
      , ge = () => {
        s("/", {
            replace: !0
        })
    }
      , _e = i.useCallback(k => {
        C(new Set(k))
    }
    , []);
    i.useCallback(async () => {
        if (!h) {
            console.error("Cannot save strings: JAR instance not available.");
            return
        }
        const k = v.filter(j => j.changed);
        if (k.length === 0) {
            console.info("No string changes to save.");
            return
        }
        try {
            const j = await ks(h, k);
            b(A => A.map(y => y.changed ? {
                ...y,
                changed: !1
            } : y)),
            j.size > 0 && C(A => new Set([...A, ...j])),
            console.log(`Successfully saved changes to ${j.size} class file(s).`)
        } catch (j) {
            console.error("[JarViewerPage Handler] Failed to save string changes:", j),
            console.error(`Failed to save string changes: ${j}`)
        }
    }
    , [h, v]);
    const Re = i.useCallback( (k, j) => {
        let A = null;
        b(y => {
            const I = y.map(P => P.id === k ? (A = P.location.filePath,
            {
                ...P,
                value: j,
                changed: !0
            }) : P);
            return Z(I.some(P => P.changed)),
            I
        }
        ),
        A && C(y => new Set(y).add(A))
    }
    , [])
      , w = i.useCallback(k => {
        let j = null
          , A = !1;
        b(y => {
            const I = y.find(F => F.id === k);
            if (!I || I.originalValue === void 0)
                return console.warn(`[JarViewerPage Handler] Could not revert string ID ${k}: Not found or no original value.`),
                y;
            j = I.location.filePath;
            const P = y.map(F => F.id === k ? {
                ...F,
                value: F.originalValue,
                changed: !1
            } : F);
            return A = !P.some(F => F.location.filePath === j && F.changed),
            Z(P.some(F => F.changed)),
            P
        }
        ),
        j && A && C(y => {
            const I = new Set(y);
            return I.delete(j),
            I
        }
        )
    }
    , [])
      , D = i.useCallback(k => {
        b(j => {
            const A = j.map(y => y.location.filePath === k ? {
                ...y,
                value: y.originalValue,
                changed: !1
            } : y);
            return Z(A.some(y => y.changed)),
            A
        }
        )
    }
    , [])
      , X = async (k=!0) => {
        if (!h || !d) {
            console.error("Cannot save: JAR instance or file info missing.");
            return
        }
        const j = q;
        let A = h;
        if (k) {
            const y = v.filter(I => I.changed);
            if (y.length > 0)
                try {
                    console.info(`Saving ${y.length} string modifications...`);
                    const I = await ks(h, y);
                    b(P => P.map(M => M.changed ? {
                        ...M,
                        changed: !1
                    } : M)),
                    I.size > 0 && C(P => new Set([...P, ...I])),
                    Z(!1),
                    console.log(`Saved modifications to ${I.size} class file(s). Ready to save JAR.`)
                } catch (I) {
                    console.error("[JarViewerPage Handler] Failed to write string changes to zipInstance:", I),
                    console.error(`Failed to save string changes: ${I}. Aborting JAR save.`);
                    return
                }
        } else
            A = await new as().loadAsync(d);
        try {
            console.info(k ? "Generating modified JAR..." : "Generating original JAR...");
            const y = await A.generateAsync({
                type: "blob",
                compression: "DEFLATE",
                compressionOptions: {
                    level: 6
                }
            })
              , I = k && (O.size > 0 || j);
            let P = d.name;
            I && (P = d.name.replace(/\.jar$/i, "-modified.jar"),
            P === d.name && (P = `${d.name}-modified`)),
            te(y),
            re(P),
            z("export-jar"),
            G(I),
            r ? Me.saveAs(y, P) : oe(!0)
        } catch (y) {
            console.error("[JarViewerPage Handler] Error saving JAR:", y),
            console.error(`Failed to save JAR: ${y.message || y}`)
        }
    }
      , $ = () => {
        if (Q && le)
            try {
                Me.saveAs(Q, le),
                !r && Y && (H === "export-jar" || H === "save-zip") && Xe(U.JAR_EXPORT.featureId),
                console.log("JAR saved successfully!")
            } catch (k) {
                console.error("[JarViewerPage Handler] Error during saveAs:", k),
                console.error(`Failed to trigger download: ${k.message || k}`)
            }
        else
            console.warn("Could not initiate download (missing data).");
        oe(!1),
        te(null),
        re(""),
        z(null),
        G(!1)
    }
      , K = () => {
        oe(!1),
        te(null),
        re(""),
        z(null),
        G(!1),
        console.info("Save cancelled.")
    }
      , ce = async (k=!0) => {
        if (!h || !d) {
            console.error("Cannot save as ZIP: JAR instance or file info missing.");
            return
        }
        const j = q;
        let A = h;
        if (k) {
            const y = v.filter(I => I.changed);
            if (y.length > 0)
                try {
                    const I = await ks(h, y);
                    b(P => P.map(M => M.changed ? {
                        ...M,
                        changed: !1
                    } : M)),
                    I.size > 0 && C(P => new Set([...P, ...I])),
                    Z(!1)
                } catch (I) {
                    console.error("[JarViewerPage Handler] Failed to write string changes to zipInstance for ZIP packaging:", I)
                }
        } else
            A = await new as().loadAsync(d);
        try {
            console.info(k ? "Generating ZIP file with modifications..." : "Generating original ZIP file...");
            const y = await A.generateAsync({
                type: "blob",
                compression: "DEFLATE",
                compressionOptions: {
                    level: 6
                }
            });
            let I = d.name;
            const P = I.toLowerCase()
              , M = k && (O.size > 0 || j);
            if (P.endsWith(".jar") || P.endsWith(".war") || P.endsWith(".ear")) {
                const F = I.substring(0, I.lastIndexOf("."));
                I = M ? `${F}-modified.zip` : `${F}.zip`
            } else
                I = M ? `${I}-modified.zip` : `${I}.zip`;
            te(y),
            re(I),
            z("save-zip"),
            G(M),
            r ? Me.saveAs(y, I) : oe(!0)
        } catch (y) {
            console.error("[JarViewerPage Handler] Error saving as ZIP:", y)
        }
    }
    ;
    i.useEffect( () => {
        document.title = "JAR Viewer | JAR Tools - Online JAR File Editor";
        const k = "https://jar.tools/jar-viewer";
        let j = document.querySelector('link[rel="canonical"]');
        return j ? j.setAttribute("href", k) : (j = document.createElement("link"),
        j.setAttribute("rel", "canonical"),
        j.setAttribute("href", k),
        document.head.appendChild(j)),
        () => {
            const y = document.querySelector("link[rel='canonical'][href='https://jar.tools/jar-viewer']");
            y && document.head.removeChild(y)
        }
    }
    , []),
    i.useEffect( () => {
        if (!d) {
            g(null),
            b([]),
            se(null);
            return
        }
        let k = !0;
        c(!0),
        S(!0),
        L(null),
        g(null),
        b([]);
        const j = Date.now();
        console.log("[ZIP Debug] Starting ZIP processing:", {
            fileName: d.name,
            fileSize: d.size,
            fileType: d.type,
            lastModified: d.lastModified,
            fileConstructor: d.constructor.name,
            hasStream: typeof d.stream == "function",
            hasArrayBuffer: typeof d.arrayBuffer == "function",
            processingStartTime: j
        });
        const A = new as;
        return console.log("[ZIP Debug] Attempting to read file as ArrayBuffer..."),
        d.arrayBuffer().then(y => {
            const I = Date.now();
            return console.log("[ZIP Debug] ArrayBuffer read successful:", {
                bufferSize: y.byteLength,
                bufferType: y.constructor.name,
                arrayBufferReadTime: I - j
            }),
            console.log("[ZIP Debug] Attempting JSZip.loadAsync..."),
            A.loadAsync(y)
        }
        ).catch(y => (console.error("[ZIP Debug] ArrayBuffer read failed:", y),
        console.log("[ZIP Debug] Falling back to direct file loading..."),
        A.loadAsync(d))).then(y => {
            if (!k)
                return;
            const I = Date.now();
            console.log("[ZIP Debug] JSZip.loadAsync successful:", {
                totalProcessingTime: I - j,
                zipEntriesCount: Object.keys(y.files).length
            }),
            g(y),
            f.current && (clearTimeout(f.current),
            f.current = null);
            try {
                const P = d.name;
                sr(P) ? se(!0) : er(y).then(F => {
                    k && se(F.isMod)
                }
                ).catch(F => {
                    console.error("[JarViewerPage Effect] Mod detection error:", F),
                    k && se(!1)
                }
                )
            } catch (P) {
                console.error("[JarViewerPage Effect] Error in mod detection block:", P)
            }
            c(!1),
            La(y, P => {
                k && L(P)
            }
            ).then(P => {
                k && (b(P),
                S(!1),
                L(null))
            }
            ).catch(P => {
                k && (console.error("[JarViewerPage Effect] String extraction failed:", P),
                S(!1),
                L(null))
            }
            )
        }
        ).catch(y => {
            k && (console.error("[ZIP Processing Error] Detailed debugging:", {
                fileName: d.name,
                fileSize: d.size,
                fileType: d.type,
                error: y instanceof Error ? y.message : "Unknown error",
                errorType: "ZIP_LOAD_FAILED",
                errorStack: y instanceof Error ? y.stack : void 0,
                errorName: y instanceof Error ? y.name : void 0,
                jarFileValid: d instanceof File,
                jarFileSize: d ? d.size : "N/A",
                timestamp: new Date().toISOString()
            }),
            d && typeof d.arrayBuffer == "function" && (console.log("[ZIP Debug] Testing file accessibility after error..."),
            d.arrayBuffer().then(I => {
                console.log("[ZIP Debug] File is still accessible, buffer size:", I.byteLength)
            }
            ).catch(I => {
                console.error("[ZIP Debug] File is no longer accessible:", I)
            }
            )),
            f.current && (clearTimeout(f.current),
            f.current = null),
            c(!1),
            S(!1),
            ae(`Unable to process "${d.name}". This file may be corrupted or in an unsupported format. Please try a different JAR file.`),
            l(null))
        }
        ),
        () => {
            k = !1
        }
    }
    , [d]);
    let ne = null
      , xe = !1;
    return d && h && (xe = !0,
    T === "jar" ? ne = e.jsx(Wa, {
        ref: u,
        children: e.jsx(Aa, {
            jarFile: d,
            zipInstance: h,
            onClose: ge,
            currentViewMode: T,
            classStrings: v,
            isExtractingStrings: N,
            modifiedFiles: O,
            onFilesModified: _e,
            onStringsReverted: D,
            onSupportClick: () => me(!0),
            isReadOnly: p
        })
    }) : T === "string" && (ne = e.jsx(Ma, {
        strings: v,
        onStringChange: Re,
        onRevertString: w
    }))),
    e.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [!d && e.jsx(Tn, {
            type: "jar-viewer"
        }), e.jsx("main", {
            className: `${d ? "" : "container mx-auto px-4 pb-16"}`,
            children: e.jsx("div", {
                className: `${d ? "h-screen" : "max-w-5xl mx-auto"}`,
                children: d ? e.jsxs("div", {
                    className: "flex flex-col h-full",
                    children: [xe && h && e.jsx("div", {
                        className: "px-4 py-3 border-b shadow-md flex-shrink-0 bg-white z-10",
                        children: e.jsxs("div", {
                            className: "space-y-2",
                            children: [e.jsxs("div", {
                                className: "flex items-center",
                                children: [e.jsx("div", {
                                    className: `rounded-full p-1.5 mr-2 ${r ? "bg-yellow-100" : B ? "bg-green-100" : "bg-jar-100"}`,
                                    children: B ? e.jsx(yn, {
                                        width: 18,
                                        height: 18,
                                        className: `${r ? "text-yellow-500" : "text-green-600"}`
                                    }) : e.jsx(rn, {
                                        size: 18,
                                        className: `${r ? "text-yellow-500" : "text-jar-600"}`
                                    })
                                }), e.jsx("div", {
                                    className: "flex-1 min-w-0",
                                    children: e.jsxs("h2", {
                                        className: "text-base md:text-lg font-medium text-gray-800 truncate flex items-center",
                                        title: d.name,
                                        children: [e.jsx("span", {
                                            children: d.name
                                        }), e.jsx("span", {
                                            className: "mx-2 text-gray-400",
                                            children: "|"
                                        }), e.jsx("span", {
                                            className: "text-sm text-gray-500 italic font-normal",
                                            children: ( () => {
                                                const k = d.size
                                                  , j = 1024
                                                  , A = 1024 * 1024;
                                                if (k < j)
                                                    return `${k} B`;
                                                if (k < A) {
                                                    const y = k / j;
                                                    return `${y.toFixed(y < 10 ? 1 : 0)} KB`
                                                } else
                                                    return `${(k / A).toFixed(2)} MB`
                                            }
                                            )()
                                        }), !r && e.jsxs(e.Fragment, {
                                            children: [e.jsx("span", {
                                                className: "mx-2 text-gray-400",
                                                children: "|"
                                            }), p ? e.jsx(za, {
                                                onClick: () => J(!0)
                                            }) : e.jsx($a, {})]
                                        }), O.size > 0 && e.jsxs(e.Fragment, {
                                            children: [e.jsx("span", {
                                                className: "mx-2 text-gray-400",
                                                children: "|"
                                            }), e.jsxs("span", {
                                                className: "text-sm text-jar-500 font-medium",
                                                children: [O.size, " modified"]
                                            })]
                                        }), r && e.jsxs("div", {
                                            className: "flex items-center ml-2 text-yellow-600",
                                            children: [e.jsx(be, {
                                                size: 14,
                                                className: "mr-1"
                                            }), e.jsx("span", {
                                                className: "text-xs font-medium",
                                                children: "Pro"
                                            }), e.jsx(_, {
                                                variant: "ghost",
                                                size: "sm",
                                                onClick: n,
                                                className: "text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 h-5 w-5 p-0 ml-1",
                                                title: "Exit Pro version",
                                                children: e.jsx(Ue, {
                                                    size: 12
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), e.jsx("div", {
                                className: "flex flex-col space-y-2",
                                children: e.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [e.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [e.jsxs(_, {
                                            variant: T === "jar" ? "secondary" : "ghost",
                                            size: "sm",
                                            onClick: () => R("jar"),
                                            className: "text-xs h-6 px-2",
                                            disabled: m,
                                            children: [e.jsx(nn, {
                                                className: "mr-1 h-3.5 w-3.5"
                                            }), "JAR View"]
                                        }), e.jsxs(_, {
                                            variant: T === "string" ? "secondary" : "ghost",
                                            size: "sm",
                                            onClick: () => R("string"),
                                            disabled: N || v.length === 0,
                                            title: v.length > 0 ? "View/Edit Class Strings" : "No class strings found or still extracting",
                                            className: "text-xs h-6 px-2",
                                            children: [e.jsx(an, {
                                                className: "mr-1 h-3.5 w-3.5"
                                            }), "Strings", !N && v.length > 0 && e.jsx("span", {
                                                className: "ml-1 inline-flex items-center justify-center px-1 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 min-w-[18px]",
                                                children: v.length
                                            }), N && e.jsx(Ts, {
                                                size: 10,
                                                className: "ml-1 animate-spin"
                                            })]
                                        })]
                                    }), e.jsxs("div", {
                                        className: "flex items-center gap-1 min-w-0",
                                        children: [!r && e.jsx("div", {
                                            className: "flex-shrink-0 mr-2",
                                            children: e.jsx(Pn, {})
                                        }), ( () => {
                                            const k = !h || m || N || p
                                              , j = p ? "Export disabled in read-only mode — Upgrade to Pro for unlimited uploads" : h ? m ? "Loading JAR — export will be available shortly" : N ? "Extracting strings — export will resume when done" : O.size === 0 && !q ? "Export JAR or ZIP" : `Export ${O.size} modified files` : "Load a JAR file to enable export";
                                            return e.jsx("div", {
                                                className: "flex-shrink-0",
                                                children: e.jsx(zs, {
                                                    delayDuration: 150,
                                                    children: e.jsxs(fs, {
                                                        children: [e.jsx(hs, {
                                                            asChild: !0,
                                                            children: e.jsx("span", {
                                                                children: e.jsx(Va, {
                                                                    disabled: k,
                                                                    modifiedFilesCount: O.size,
                                                                    hasStringChanges: q,
                                                                    isProUser: r,
                                                                    onExportJar: X,
                                                                    onExportZip: ce,
                                                                    tooltip: j
                                                                })
                                                            })
                                                        }), e.jsx(Qe, {
                                                            children: e.jsx("p", {
                                                                children: j
                                                            })
                                                        })]
                                                    })
                                                })
                                            })
                                        }
                                        )(), e.jsx("div", {
                                            className: "flex-shrink-0",
                                            children: e.jsxs(_, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ge,
                                                title: "Close Viewer (ESC)",
                                                className: "h-8 px-2 border-gray-300 hover:bg-gray-50",
                                                children: [e.jsx(Ue, {
                                                    size: 14,
                                                    className: "md:mr-1"
                                                }), e.jsx("span", {
                                                    className: "hidden md:inline text-sm",
                                                    children: "Close"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), m ? e.jsxs("div", {
                        className: "flex-grow flex flex-col items-center justify-center",
                        children: [e.jsx(Ts, {
                            size: 40,
                            className: "text-jar-500 mb-4 animate-spin"
                        }), e.jsx("p", {
                            className: "text-gray-600",
                            children: "Loading JAR file..."
                        })]
                    }) : h ? e.jsx("div", {
                        className: "flex-grow relative overflow-hidden",
                        children: ne
                    }) : e.jsx("div", {
                        className: "flex-grow flex flex-col items-center justify-center",
                        children: e.jsx("p", {
                            className: "text-gray-600",
                            children: "Error loading JAR file. Please try again."
                        })
                    })]
                }) : e.jsxs("div", {
                    className: "p-6",
                    children: [e.jsxs("div", {
                        className: "text-center mb-6",
                        children: [e.jsx("h3", {
                            className: "text-2xl font-extrabold text-gray-900 mb-4 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text transform hover:scale-105 transition-transform",
                            children: "Upload a jar and start exploring now ↓"
                        }), e.jsx("div", {
                            className: "w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"
                        })]
                    }), de && e.jsx("div", {
                        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: e.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [e.jsx(Ut, {
                                className: "h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"
                            }), e.jsxs("div", {
                                className: "flex-1",
                                children: [e.jsx("h3", {
                                    className: "text-red-800 font-medium text-sm",
                                    children: "File Processing Error"
                                }), e.jsx("p", {
                                    className: "text-red-700 text-sm mt-1",
                                    children: de
                                })]
                            }), e.jsx("button", {
                                onClick: () => ae(null),
                                className: "text-red-500 hover:text-red-700",
                                title: "Dismiss",
                                children: e.jsx(Ue, {
                                    className: "h-4 w-4"
                                })
                            })]
                        })
                    }), e.jsx("div", {
                        className: "relative bg-white border-2 border-blue-300 rounded-lg p-6 shadow-2xl shadow-blue-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/80 hover:border-blue-400 mb-8",
                        children: e.jsx(bn, {
                            onJarSelected: Ee,
                            showSamples: !0
                        })
                    })]
                })
            })
        }), e.jsx(Vs, {
            isOpen: W,
            onClose: K,
            onConfirm: $,
            fileName: le
        }), e.jsx(tr, {
            open: fe,
            onOpenChange: Ie
        }), e.jsx(Ba, {
            isOpen: pe,
            onClose: () => me(!1)
        }), e.jsx(Ja, {
            isOpen: ee,
            onClose: () => J(!1),
            timeUntilReset: o.timeUntilReset
        })]
    })
}
  , ei = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ha
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Pe as A, _ as B, we as D, $e as I, bn as J, ys as L, yn as M, qa as P, Le as T, ye as a, ve as b, je as c, Ne as d, Ce as e, xs as f, Fe as g, Tn as h, An as i, V as j, Pn as k, zs as l, Qa as m, ei as n, ke as u};
