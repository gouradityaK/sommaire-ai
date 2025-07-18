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




'use server'

import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

export async function generatePDFSummary(uploadResponse: [{
    serverData: {
        userId: string;
        file: {
            url: string;
            name: string;
        };
    };
}]) {
    if (!uploadResponse) {
        return {
            success: false,
            message: "File Upload Failed",
            data: null,
        };
    }
    
    const { serverData: {
        userId, file: { url: pdfUrl, name: fileName },
    },
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            message: "File Upload Failed",
            data: null,
        };
    }
    
    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log("Extracted PDF text:", {pdfText});

        let summary;
        let provider = 'Unknown';
        
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            provider = 'OpenAI';
        } catch(error) {
            console.log("OpenAI Error:", error); 
            
            if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await generateSummaryFromGemini(pdfText);
                    provider = 'Gemini';
                } catch(geminiError) {
                    console.error(
                        'Gemini API Failed after the OpenAI quota exceeded',
                        geminiError
                    );
                    return {
                        success: false,
                        message: "Failed to generate Summary with available AI providers",
                        data: null,
                    };
                }
            } else {
                throw error;
            }
        }

        if(!summary) {
            return {
                success: false,
                message: "Failed to generate Summary",
                data: null,
            };
        }

        // Add provider information to the summary
        const annotatedSummary = `This summary was generated by ${provider}:\n\n${summary}`;
        
        console.log(`Summary generated by ${provider}:`, {summary});

        return {
            success: true,
            message: "Summary Generated Successfully!",
            data: {
                summary: annotatedSummary,
                provider, // Still including the provider separately if needed
            },
        };
    } catch (err) {
        console.error("Error in generatePDFSummary:", err);
        return {
            success: false,
            message: "Failed to process PDF",
            data: null,
        };
    }
}