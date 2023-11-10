import contact from "../../assets/contact.png"

const Contact = () => {
    return (
        <section className="bg-gradient-to-r from-[#C1DBFF] to-[#92bdbd] py-10 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8">
                    <div className="md:w-1/2">
                        <img
                            src={contact}
                            alt="Contact Us Image"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg leading-relaxed text-justify">
                            Have any questions or suggestions? Feel free to reach out to us. Our dedicated team is here to assist you.
                            Your feedback is valuable to us, and we are always striving to improve your experience on our platform.
                        </p>
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                            <p>Email: info@example.com</p>
                            <p>Phone: +880 1656-789093</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;