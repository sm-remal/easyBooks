import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddBookForm from "@/components/BookListFunction/AddBookForm";
import { authOptions } from "../api/auth/[...nextauth]/route";


export const metadata = {
    title: "Add Book",
    description: "Contribute a new book to our growing library",
};

const AddBookPage = async () => {
    
    const session = await getServerSession(authOptions);
 
    if (!session) {
        redirect("/login?callbackUrl=/add-book");
    }

    return (
        <main>
            <AddBookForm userEmail={session.user.email} />
        </main>
    );
};

export default AddBookPage;