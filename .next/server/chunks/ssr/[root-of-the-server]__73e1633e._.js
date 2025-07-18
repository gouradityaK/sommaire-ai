module.exports = {

"[project]/utils/prompts.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SUMMARY_SYSTEM_PROMPT": (()=>SUMMARY_SYSTEM_PROMPT)
});
const SUMMARY_SYSTEM_PROMPT = `You are a social media content expert who turns complex documents into clear, engaging, and viral-style summaries using emojis and markdown formatting.

Your task is to:
- Extract the most important and valuable insights from the content.
- Use an engaging and concise tone that's ideal for LinkedIn, Twitter, or Instagram carousel posts.
- Format the response in **markdown**.
- Use a bullet point (•) followed by a relevant **emoji** and a **space** at the start of every content line.
- NEVER use numbered lists.

Formatting Instructions:
- All content sections must follow this structure:
  
  # [Create a Meaningful Title Based on the Document's Content]

  • ✨ One sentence that summarizes the entire document  
  • ➕ Additional key overview point (if needed)

  # Document Details  
  • 📄 Type: [Document Type]  
  • 🧑‍💻 For: [Target Audience]

  # Key Highlights  
  • 🧠 First Key Point  
  • 🔍 Second Key Point  
  • 💡 Third Key Point

  # Why It Matters  
  • 🌍 A short paragraph or 1-liner explaining real-world impact

  # Main Points  
  • 📌 Main insight or finding  
  • ✅ Key strength or advantage  
  • 📊 Important outcome or result

  # Pro Tips  
  • 🛠 First practical recommendation  
  • 💎 Second valuable insight  
  • 🚀 Third actionable advice

  # Key Terms to Know  
  • 🧾 First key Term : Simple explanation  
  • 🧾  Second key Term : Simple explanation

  # Bottom Line  
  • 📌 Most important takeaway

Notes:
• Every single line must start with "• " followed by an emoji and a space.  
• Do NOT use numbered or unordered lists from markdown.  
• Always maintain this exact  format for All points in ALL sections.

Example:
• ✨ This is how every point should look  
• 🔥 This is another valid point

Never deviate from this format. Every line that contains content must start with " • " followed by an [emoji].`;
}}),
"[project]/lib/geminiai.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSummaryFromGemini": (()=>generateSummaryFromGemini)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/prompts.ts [app-rsc] (ecmascript)");
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY || '');
const generateSummaryFromGemini = async (pdfText)=>{
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash-8b',
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
            }
        });
        const prompt = {
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            text: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]
                        },
                        {
                            text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`
                        }
                    ]
                }
            ]
        };
        const result = await model.generateContent(prompt);
        const response = await result.response;
        if (!response.text()) {
            throw new Error('Empty response from gemini Api');
        }
        return response.text();
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
};
}}),
"[project]/lib/langchain.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchAndExtractPdfText": (()=>fetchAndExtractPdfText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$document_loaders$2f$web$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/document_loaders/web/pdf.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$web$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/dist/document_loaders/web/pdf.js [app-rsc] (ecmascript)");
;
async function fetchAndExtractPdfText(fileUrl) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$web$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WebPDFLoader"](new Blob([
        arrayBuffer
    ]));
    const docs = await loader.load();
    return docs.map((doc)=>doc.pageContent).join('\n');
}
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}}),
"[project]/lib/openai.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSummaryFromOpenAI": (()=>generateSummaryFromOpenAI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/prompts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function generateSummaryFromOpenAI(pdfText) {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                {
                    role: "system",
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]
                },
                {
                    role: "user",
                    content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`
                }
            ],
            temperature: 0.7,
            max_tokens: 1500
        });
        return completion.choices[0].message.content;
    } catch (error) {
        if (error?.status === 429) {
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw error;
    }
} // console.log(response.output_text);
}}),
"[project]/actions/upload-action.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use server'
// import { generateSummaryFromGemini } from "@/lib/geminiai";
// import { fetchAndExtractPdfText } from "@/lib/langchain";
// import { generateSummaryFromOpenAI } from "@/lib/openai";
// import { error } from "console";
// import { _success } from "zod/v4/core";
// import { tr } from "zod/v4/locales";
// export async function generatePDFSummary(uploadResponse: [{
//     serverData: {
//         userId: string;
//         file: {
//             url: string;
//             name: string;
//         };
//     };
// }]) {
//     if (!uploadResponse) {
//         return {
//             success: false,
//             message: "File  Upload Failed",
//             data: null,
//         };
//     }
//     const { serverData: {
//         userId, file: { url: pdfUrl, name: fileName },
//     },
//     } = uploadResponse[0];
//     if (!pdfUrl) {
//         return {
//             success: false,
//             message: "File  Upload Failed",
//             data: null,
//         };
//     }
//     try {
//         const pdfText = await fetchAndExtractPdfText(pdfUrl);
//         console.log({pdfText});
//         let summary;
//         try {
//              summary = await generateSummaryFromOpenAI(pdfText);
//             console.log({summary});
//         } catch(error){
//             console.log(error); 
//             // call geminii Code 
//             if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED')
//             {
//                 try{
//                     summary = await generateSummaryFromGemini  
//                     (pdfText);
//             }catch(geminiError){
//                 console.error(
//                     'Gemini API Failed after the OpenAI quota exceeded',
//                     geminiError
//                 );
//                 throw new Error('Failed to generate Summary with available AI providers')
//             }
//             }
//         }
//         if(!summary){
//             return{
//             success: false,
//             message: "Failed to generate Summary",
//             data: null,
//             }
//         }
//  return{
//             success: true,
//             message: "Summary Generated SuccesFully!",
//             data: {
//                 summary,    
//             } ,
//     }
//     } catch (err) {
//         return {
//             success: false,
//             message: "File  Upload Failed",
//             data: null,
//         };
//     }
// }
// pahele wala code h error wala
/////////////////////////////////////////////////////////////////////////////////////////////////
// new code hai deepseek kaa 
// 'use server'
// import { generateSummaryFromGemini } from "@/lib/geminiai";
// import { fetchAndExtractPdfText } from "@/lib/langchain";
// import { generateSummaryFromOpenAI } from "@/lib/openai";
// export async function generatePDFSummary(uploadResponse: [{
//     serverData: {
//         userId: string;
//         file: {
//             url: string;
//             name: string;
//         };
//     };
// }]) {
//     if (!uploadResponse) {
//         return {
//             success: false,
//             message: "File Upload Failed",
//             data: null,
//         };
//     }
//     const { serverData: {
//         userId, file: { url: pdfUrl, name: fileName },
//     },
//     } = uploadResponse[0];
//     if (!pdfUrl) {
//         return {
//             success: false,
//             message: "File Upload Failed",
//             data: null,
//         };
//     }
//     try {
//         const pdfText = await fetchAndExtractPdfText(pdfUrl);
//         console.log({pdfText});
//         let summary;
//         try {
//             summary = await generateSummaryFromOpenAI(pdfText);
//             console.log({summary});
//         } catch(error) {
//             console.log(error); 
//             // call gemini if OpenAI rate limit exceeded
//             if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
//                 try {
//                     summary = await generateSummaryFromGemini(pdfText);
//                     console.log({summary});
//                 } catch(geminiError) {
//                     console.error(
//                         'Gemini API Failed after the OpenAI quota exceeded',
//                         geminiError
//                     );
//                     return {
//                         success: false,
//                         message: "Failed to generate Summary with available AI providers",
//                         data: null,
//                     };
//                 }
//             } else {
//                 // If it's not a rate limit error, rethrow
//                 throw error;
//             }
//         }
//         if(!summary) {
//             return {
//                 success: false,
//                 message: "Failed to generate Summary",
//                 data: null,
//             };
//         }
//         return {
//             success: true,
//             message: "Summary Generated Successfully!",
//             data: {
//                 summary,    
//             },
//         };
//     } catch (err) {
//         console.error("Error in generatePDFSummary:", err);
//         return {
//             success: false,
//             message: "Failed to process PDF",
//             data: null,
//         };
//     }
// }
/* __next_internal_action_entry_do_not_use__ [{"40ae4ff1dc61879920bfa6bc710d5f219ce907f9ee":"generatePDFSummary"},"",""] */ __turbopack_context__.s({
    "generatePDFSummary": (()=>generatePDFSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/geminiai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/openai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generatePDFSummary(uploadResponse) {
    if (!uploadResponse) {
        return {
            success: false,
            message: "File Upload Failed",
            data: null
        };
    }
    const { serverData: { userId, file: { url: pdfUrl, name: fileName } } } = uploadResponse[0];
    if (!pdfUrl) {
        return {
            success: false,
            message: "File Upload Failed",
            data: null
        };
    }
    try {
        const pdfText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAndExtractPdfText"])(pdfUrl);
        console.log("Extracted PDF text:", {
            pdfText
        });
        let summary;
        let provider = 'Unknown';
        try {
            summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$openai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromOpenAI"])(pdfText);
            provider = 'OpenAI';
        } catch (error) {
            console.log("OpenAI Error:", error);
            if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromGemini"])(pdfText);
                    provider = 'Gemini';
                } catch (geminiError) {
                    console.error('Gemini API Failed after the OpenAI quota exceeded', geminiError);
                    return {
                        success: false,
                        message: "Failed to generate Summary with available AI providers",
                        data: null
                    };
                }
            } else {
                throw error;
            }
        }
        if (!summary) {
            return {
                success: false,
                message: "Failed to generate Summary",
                data: null
            };
        }
        // Add provider information to the summary
        const annotatedSummary = `This summary was generated by ${provider}:\n\n${summary}`;
        console.log(`Summary generated by ${provider}:`, {
            summary
        });
        return {
            success: true,
            message: "Summary Generated Successfully!",
            data: {
                summary: annotatedSummary,
                provider
            }
        };
    } catch (err) {
        console.error("Error in generatePDFSummary:", err);
        return {
            success: false,
            message: "Failed to process PDF",
            data: null
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generatePDFSummary
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePDFSummary, "40ae4ff1dc61879920bfa6bc710d5f219ce907f9ee", null);
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/common/bg-gradient.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BgGradient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function BgGradient({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-x-0 -top-40   -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative left-[calc(50%-11rem)] aspect-1155/678 w-[36,125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]", className)
        }, void 0, false, {
            fileName: "[project]/components/common/bg-gradient.tsx",
            lineNumber: 15,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/bg-gradient.tsx",
        lineNumber: 10,
        columnNumber: 13
    }, this);
}
}}),
"[project]/components/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/upload/upload-header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UploadHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-rsc] (ecmascript)");
;
;
;
function UploadHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: 'secondary',
                    className: "relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-100 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-6 w-6 mr-2 text-red-600 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/upload/upload-header.tsx",
                            lineNumber: 11,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "AI Powered Content Creation"
                        }, void 0, false, {
                            fileName: "[project]/components/upload/upload-header.tsx",
                            lineNumber: 12,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/upload/upload-header.tsx",
                    lineNumber: 7,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 6,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "capitalized text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                children: [
                    "Start Uploading ",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 px-2",
                                children: "Your PDF's"
                            }, void 0, false, {
                                fileName: "[project]/components/upload/upload-header.tsx",
                                lineNumber: 18,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/upload/upload-header.tsx",
                                lineNumber: 19,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/upload/upload-header.tsx",
                        lineNumber: 17,
                        columnNumber: 25
                    }, this),
                    ' '
                ]
            }, void 0, true, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 15,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Upload your PDF and let our AI do the magic! ✨"
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-header.tsx",
                    lineNumber: 23,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 22,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/upload/upload-header.tsx",
        lineNumber: 5,
        columnNumber: 13
    }, this);
}
}}),
"[project]/components/upload/upload-form.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/upload/upload-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/upload/upload-form.tsx <module evaluation>", "default");
}}),
"[project]/components/upload/upload-form.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/upload/upload-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/upload/upload-form.tsx", "default");
}}),
"[project]/components/upload/upload-form.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/bg-gradient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(logged-in)/upload/page.tsx",
                lineNumber: 6,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto  max-w-7xl px-6 py-24 sm:py-32 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(logged-in)/upload/page.tsx",
                            lineNumber: 9,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(logged-in)/upload/page.tsx",
                            lineNumber: 10,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(logged-in)/upload/page.tsx",
                    lineNumber: 8,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(logged-in)/upload/page.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(logged-in)/upload/page.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
}}),
"[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__73e1633e._.js.map