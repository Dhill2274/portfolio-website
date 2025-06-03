export const Footer = () => {
    return (
        <footer className="mb-10 px-4 relative mt-12 pt-8 flex flex-wrap justify-center items-center text-gray-500">
            <small className="mb-2 text-xs block">
                &copy; {new Date().getFullYear()} Dhillon Thurairatnam. All rights reserved.
            </small>
            <p className="block w-full text-center mt-1">
                Thank you for visiting!
            </p>
        </footer>
    );
}