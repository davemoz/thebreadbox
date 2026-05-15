(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/ssr/[root-of-the-server]__0.5meuf._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/app/lib/supabase.server.ts [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$10$2e$3_$40$supabase$2b$supabase$2d$js$40$2$2e$105$2e$4$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.10.3_@supabase+supabase-js@2.105.4/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/headers.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request/cookies.js [app-edge-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$10$2e$3_$40$supabase$2b$supabase$2d$js$40$2$2e$105$2e$4$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Called from a Server Component — cookies will be set by middleware.
                }
            }
        }
    });
}
}),
"[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a8344f74d7ef632d83fbfda8a15cdfe391ce290f":{"name":"signoutAction"},"4021a59ccd5630d571d0296e3192fdc46db4f01dc8":{"name":"loginAction"},"4086543a1c8db06df6c838b2cd5deacd1340e88809":{"name":"signupAction"}},"app/actions/auth.ts",""] */ __turbopack_context__.s([
    "loginAction",
    ()=>loginAction,
    "signoutAction",
    ()=>signoutAction,
    "signupAction",
    ()=>signupAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/server-reference.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/navigation.react-server.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/redirect.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$server$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.server.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/action-validate.js [app-edge-rsc] (ecmascript)");
;
;
;
async function loginAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$server$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get("email"),
        password: formData.get("password")
    });
    if (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/account/login?error=" + encodeURIComponent(error.message));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/recipes");
}
async function signupAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$server$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.auth.signUp({
        email: formData.get("email"),
        password: formData.get("password")
    });
    if (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/account/signup?error=" + encodeURIComponent(error.message));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/recipes");
}
async function signoutAction() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$server$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    await supabase.auth.signOut();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    signupAction,
    signoutAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "4021a59ccd5630d571d0296e3192fdc46db4f01dc8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signupAction, "4086543a1c8db06df6c838b2cd5deacd1340e88809", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signoutAction, "00a8344f74d7ef632d83fbfda8a15cdfe391ce290f", null);
}),
"[project]/.next-internal/server/app/account/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)\" } [app-edge-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/account/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)\" } [app-edge-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00a8344f74d7ef632d83fbfda8a15cdfe391ce290f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["signoutAction"],
    "4021a59ccd5630d571d0296e3192fdc46db4f01dc8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["loginAction"],
    "4086543a1c8db06df6c838b2cd5deacd1340e88809",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["signupAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$account$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$edge$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/account/login/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)" } [app-edge-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-edge-rsc] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0.5meuf._.js.map