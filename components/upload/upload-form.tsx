// // 'use client'
// // import UploadFormInput from "@/components/upload/upload-form-input";
// // import { useUploadThing } from "@/utils/uploadthing";
// // import { useSonner } from "sonner"


// // import { z } from 'zod'


// // const schema = z.object({
// //     file: z.instanceof(File, { message: 'Invalid FIle' }).refine((file) => file.size <= 15 * 1024 * 1024,
// //     )
// //         .refine((file) => file.type.startsWith('application/pdf'),
// //             { message: 'File must be a PDF' }
// //         ),
// // });
// // export default function UploadForm() {


// //     const { startUpload } = useUploadThing
// //         ('pdfUploader', {
// //             onClientUploadComplete: () => {
// //                 console.log("uploaded successfully!");
// //             },
// //             onUploadError: (error) => {
// //                 console.error("error occurred while uploading", error);
// //             },
// //             onUploadBegin: ({ file }) => {
// //                 console.log("upload has begun for", file);
// //             },
// //         });

// //     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
// //         console.log("Form submitted");
// //         const formData = new FormData(e.currentTarget);
// //         const file = formData.get("file") as File;

// //         // validating the fields that the form have/
// //         const validatedFields = schema.safeParse({ file });

// //         console.log(validatedFields);

// //         if (!validatedFields.success) {
// //             console.log(
// //                 validatedFields.error.flatten().fieldErrors.file?.
// //                 [0] ?? 'Invalid file'
// //             );
// //             return;
// //         }
// //         // schema validation with zod 
// //         // upload the file to Upload Things 
// //         const resp = await startUpload([file]);
// //         if (!resp) {
// //             return;
// //         }
// //         //parse the pdf int lang chain
// //         // Summarized the pdf into the valuable insides
// //         // save the summary to the database
// //         // and after this redirect to the summary page as well as the summary


// //     };
// //     return (
// //         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
// //             <UploadFormInput onSubmit={handleSubmit} />
// //         </div>
// //     );
// // }

// // 'use client'

// // import UploadFormInput from "@/components/upload/upload-form-input"
// // import { useUploadThing } from "@/utils/uploadthing"
// // import { toast } from "sonner" // ✅ Import toast here
// // import { z } from "zod"

// // const schema = z.object({
// //     file: z
// //         .instanceof(File, { message: "Invalid File" })
// //         .refine((file) => file.size <= 15 * 1024 * 1024, {
// //             message: "File size must be under 15MB",
// //         })
// //         .refine((file) => file.type.startsWith("application/pdf"), {
// //             message: "File must be a PDF",
// //         }),
// // })

// // export default function UploadForm() {
// //     const { startUpload } = useUploadThing("pdfUploader", {
// //         onClientUploadComplete: () => {
// //             // console.log("uploaded successfully!")
// //             toast.success("Uploaded successfully!")
// //         },
// //         onUploadError: (error) => {
// //             // console.error("error occurred while uploading", error)
// //             toast.error("Upload failed", {
// //                 description: error.message,
// //             })
// //         },
// //         onUploadBegin: ({ file }) => {
// //             console.log("upload has begun for", file)
// //             toast("Uploading...", {
// //                 description: file.name,
// //             })
// //         },
// //     })

// //     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault()
// //         console.log("Form submitted")

// //         const formData = new FormData(e.currentTarget)
// //         const file = formData.get("file") as File

// //         const validatedFields = schema.safeParse({ file })

// //         if (!validatedFields.success) {
// //             const message =
// //                 validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
// //             toast.error("Validation Error", {
// //                 description: message,
// //                 className: "bg-red-100 text-red-800 border border-red-400", // like "destructive"
// //                 icon: "❌",
// //             })
// //             //     toast("Validation Error", {
// //             //   description: message,
// //             //   className: "bg-red-100 text-red-800 border border-red-400", // like "destructive"
// //             //   icon: "❌",
// //             // })
// //             return
// //         }
// //         toast('Uploading.......',
// //             {
// //                 description: 'We are uploading your pdf!',
// //             }
// //         )
// //         const resp = await startUpload([file])

// //         if (!resp) {
// //             toast("Something went wrong during upload",{
// //                 description:'please used another file',
// //                 className: "bg-red-100 text-red-800 border border-red-400"
// //             })
// //             return;
// //         }
// //         toast('Processing the PDF',
// //             {
// //                 description: 'Hang tight!  Our AI is reading through your document .',
// //             }
// //         )

// //         // Further steps after successful upload (e.g., call backend or redirect)
// //     }

// //     return (
// //         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
// //             <UploadFormInput onSubmit={handleSubmit} />
// //         </div>
// //     )
// // }


// 'use client'
// import { generatePDFSummary } from "@/app/actions/upload-action"
// import UploadFormInput from "@/components/upload/upload-form-input"
// import { useUploadThing } from "@/utils/uploadthing"
// import { toast } from "sonner"
// import { z } from "zod"

// const schema = z.object({
//     file: z
//         .instanceof(File, { message: "Invalid File" })
//         .refine((file) => file.size <= 15 * 1024 * 1024, {
//             message: "File size must be under 15MB",
//         })
//         .refine((file) => file.type.startsWith("application/pdf"), {
//             message: "File must be a PDF",
//         }),
// })

// export default function UploadForm() {
//     const { startUpload } = useUploadThing("pdfUploader", {
//         onClientUploadComplete: (res) => {
//             toast.success("Upload complete!", {
//                 description: "Your PDF is being processed.",
//             })
//             console.log("Uploaded files:", res) // Debug uploaded files
//         },
//         onUploadError: (error) => {
//             toast.error("Upload failed", {
//                 description: error.message || "Please try again.",
//             })
//             console.error("UploadThing error:", error) // Log full error
//         },
//     })

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         const formData = new FormData(e.currentTarget)
//         const file = formData.get("file") as File

//         // Debug: Log file details
//         console.log("Selected file:", {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//         })

//         // Validate file
//         const validatedFields = schema.safeParse({ file })
//         if (!validatedFields.success) {
//             const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
//             toast.error("Validation error", {
//                 description: errorMessage,
//             })
//             return
//         }

//         // Start upload
//         const uploadToast = toast.loading("Uploading your PDF📝")
//         try {
//             const resp = await startUpload([file])
//             if (!resp) {
//                 toast.error("Upload failed", {
//                     description: "No response received.",
//                     id: uploadToast,
//                 })
//                 return
//             }
//             toast.success("Processing started!", {
//                 description: "AI is analyzing your document...",
//                 id: uploadToast,
//             })
//         } catch (err) {
//             toast.error("Unexpected error", {
//                 description: "Please try again later.",
//                 id: uploadToast,
//             })
//             console.error("Submission error:", err)
//         };

//         // parse the pdf using langchain 
//         const summary = await generatePDFSummary(resp);
//         console.log({summary});
        
//         // Summaries the pdf Using AI
//         //  save the summary to the database 
//         // redirect to the  [id] summary page


//     };

//     return (
//         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
//             <UploadFormInput onSubmit={handleSubmit} />
//         </div>
//     )
// }

// new chatgot 


// 'use client'
// import { generatePDFSummary } from "@/app/actions/upload-action"
// import UploadFormInput from "@/components/upload/upload-form-input"
// import { useUploadThing } from "@/utils/uploadthing"
// import { toast } from "sonner"
// import { z } from "zod"
// import { useRouter } from "next/navigation"

// // Define types for better type safety
// type UploadResponse = {
//     name: string;
//     size: number;
//     key: string;
//     url: string;
//     // Add other properties you expect from the upload response
// }[];

// const schema = z.object({
//     file: z
//         .instanceof(File, { message: "Invalid File" })
//         .refine((file) => file.size <= 15 * 1024 * 1024, {
//             message: "File size must be under 15MB",
//         })
//         .refine((file) => file.type.startsWith("application/pdf"), {
//             message: "File must be a PDF",
//         }),
// })

// export default function UploadForm() {
//     const router = useRouter()
//     const { startUpload } = useUploadThing("pdfUploader", {
//         onClientUploadComplete: (res) => {
//             toast.success("Upload complete!", {
//                 description: "Your PDF is being processed.",
//             })
//             console.log("Uploaded files:", res)
//         },
//         onUploadError: (error) => {
//             toast.error("Upload failed", {
//                 description: error.message || "Please try again.",
//             })
//             console.error("UploadThing error:", error)
//         },
//     })

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         const formData = new FormData(e.currentTarget)
//         const file = formData.get("file") as File

//         console.log("Selected file:", {
//             name: file.name,
//             type: file.type,
//             size: file.size,
//         })

//         const validatedFields = schema.safeParse({ file })
//         if (!validatedFields.success) {
//             const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
//             toast.error("Validation error", {
//                 description: errorMessage,
//             })
//             return
//         }

//         const uploadToast = toast.loading("Uploading your PDF📝")
//         try {
//             const uploadResponse = await startUpload([file])
//             if (!uploadResponse || uploadResponse.length === 0) {
//                 toast.error("Upload failed", {
//                     description: "No files were uploaded.",
//                     id: uploadToast,
//                 })
//                 return
//             }

//             // Get the first file from the response
//             const uploadedFile = uploadResponse[0]
            
//             // Prepare the data structure that generatePDFSummary expects
//             const summaryData = {
//                 serverData: {
//                     userId: "current-user-id", // You should replace this with actual user ID
//                     file: {
//                         url: uploadedFile.url,
//                         name: uploadedFile.name
//                     }
//                 }
//             }

//             toast.success("Processing started!", {
//                 description: "AI is analyzing your document...",
//                 id: uploadToast,
//             })

//             // Process the uploaded file
//             const summary = await generatePDFSummary([summaryData])
//             console.log({summary})

//             // TODO: Save summary to database
//             // TODO: Redirect to summary page
//             // router.push(`/summary/${summary.id}`)

//         } catch (err) {
//             toast.error("Unexpected error", {
//                 description: "Please try again later.",
//                 id: uploadToast,
//             })
//             console.error("Submission error:", err)
//         }
//     }

//     return (
//         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
//             <UploadFormInput onSubmit={handleSubmit} />
//         </div>
//     )
// }

'use client'
import { generatePDFSummary } from "@/actions/upload-action"
import UploadFormInput from "@/components/upload/upload-form-input"
import { useUploadThing } from "@/utils/uploadthing"
import { toast } from "sonner"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

const schema = z.object({
    file: z
        .instanceof(File, { message: "Invalid File" })
        .refine((file) => file.size <= 15 * 1024 * 1024, {
            message: "File size must be under 15MB",
        })
        .refine((file) => file.type.startsWith("application/pdf"), {
            message: "File must be a PDF",
        }),
})

export default function UploadForm() {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading , setIsLoading]= useState(false);
    const { startUpload } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            toast.success("Upload complete!")
        },
        onUploadError: (error) => {
            toast.error("Upload failed", {
                description: error.message || "Please try again.",
            })
        },
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            setIsLoading(true);
          
    // startrtrtrtrtrt
const formData = new FormData(e.currentTarget)
        const file = formData.get("file") as File

        // Validate file
        const validatedFields = schema.safeParse({ file })
        if (!validatedFields.success) {
            const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
            toast.error("Validation error", {
                description: errorMessage,
            });
             setIsLoading(false);
            return;
        }

        // Start upload process
        const uploadToast = toast.loading("Uploading your PDF...", {
            description: "Please wait while we upload your file",
        })

        try {
            // Upload the file
            const uploadResponse = await startUpload([file])
            if (!uploadResponse || uploadResponse.length === 0) {
                toast.error("Upload failed", {
                    description: "No files were uploaded.",
                    id: uploadToast,
                });
                 setIsLoading(false);
                return;
            }

            // Update toast to show processing
            toast.loading("📄 Processing your PDF...", {
                description: "Hang tight! Our AI is reading through your document",
                id: uploadToast,
            }) 

            // Get the first file from the response
            const uploadedFile = uploadResponse[0]
            
            // Prepare data for processing
            const summaryData = {
                serverData: {
                    userId: "current-user-id", // Replace with actual user ID
                    file: {
                        url: uploadedFile.url,
                        name: uploadedFile.name
                    }
                }
            }

            // Process the uploaded file
            const summary = await generatePDFSummary([summaryData])
             const {data = null, message = null} = summary ||{};
             if (data){
                 toast.loading("📄 Saving your PDF...", {
                description: "Hang tight! We are Saving your Summary",
                id: uploadToast,
            });
            formRef.current?.reset(); 
            if(data.summary){
                
            }
             }
    //         // Success - update toast
            toast.success("Processing complete!", {
                description: "Your document has been analyzed",
                id: uploadToast,
            })

            // console.log("Generated summary:", summary)

            // TODO: Save summary to database
            // TODO: Redirect to summary page
            // router.push(`/summary/${summary.id}`)

        } catch (err) {
            console.error("Error during upload or processing:", err)
            toast.error("Processing failed", {
                description: "There was an error analyzing your document",
                id: uploadToast,
            })
        }
// enddddsdfdfgfgfg
        }catch(error){
             setIsLoading(false);
            console.error('Error Occurs', error);
            
            formRef.current?.reset(); 
        }
        
           
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput 
            isLoading={isLoading}
            ref={formRef} 
            onSubmit={handleSubmit} />
        </div>
    )
}