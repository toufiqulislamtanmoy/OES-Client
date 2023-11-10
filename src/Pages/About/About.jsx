import aboutus from "../../assets/about.png"
const About = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8">
            <div className="md:w-1/2">
              <img
                src={aboutus}
                alt="Quiz Logo"
                className="w-full h-auto rounded-lg "
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Welcome to our online quiz testing platform! We are passionate about knowledge and learning.
                Our mission is to provide a fun and interactive way for individuals to test their knowledge
                and improve their skills. With a wide range of quizzes on various topics, we cater to learners
                of all ages and interests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At our platform, you can challenge yourself with quizzes created by experts in different fields.
                Whether you are a student preparing for exams or someone looking to expand your knowledge, we have
                quizzes tailored just for you. Join us in this educational journey and let's make learning enjoyable
                together!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;