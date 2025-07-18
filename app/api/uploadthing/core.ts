// import { currentUser } from "@clerk/nextjs/server";
// import { UploadThingError } from "uploadthing/server";
// import { createUploadthing, type FileRouter } from "uploadthing/next";
// const f = createUploadthing();

// export const ourFileRouter = {
//     pdfUploader: f({ pdf: {maxFileSize: '32MB' } })
//     .middleware(
//         async ( { req } ) => {
//             //get user information is here
//             const user = await currentUser();
//         if(!user) throw new UploadThingError
//         ('Unauthorized');   

//         return { userId: user.id };
//     }
// ).onUploadComplete(async ( {metadata, file } ) =>{
//     console.log('upload completed for user id', metadata.userId);
//     console.log('file url', file.url);
    
    
//     return { userId: metadata.userId , file. };
    
// }),
// } satisfies FileRouter;

// export type OurFileRouter = typeof ourFileRouter;  




// Chatgpt wala code hai yee error free h 

import { currentUser } from "@clerk/nextjs/server";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: '32MB' } })
        .middleware(async ({ req }) => {
            const user = await currentUser();
            if (!user) throw new UploadThingError('Unauthorized');
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log('Upload completed for userId:', metadata.userId);
            console.log('File URL:', file.ufsUrl);
            
            // Return only JSON-serializable data or nothing
            return { 
                userId: metadata.userId,
                fileUrl: file.ufsUrl,
                fileKey: file.key,
                fileName: file.name
            };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;