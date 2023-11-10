import quizImage from "../../../assets/quiz.gif"
const HeroSection = () => {
    return (
        <div>

            <div className=" bg-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={quizImage} className="max-w-sm rounded-lg lg:w-1/2" />

                    <div className="bg-primary text-white py-20 px-6 text-justify lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">Ace Your Exams with Our Interactive Online Quizzes!</h1>
                        <p className="text-lg mb-8">Engage, Learn, and Succeed with Our Comprehensive Quiz Testing Platform. Test your knowledge, track your progress, and boost your grades.</p>
                        <button className="bg-white text-primary hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded">Get Started</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HeroSection;