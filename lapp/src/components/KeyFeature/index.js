const KeyFeature = () => {
  return (
    <div>
      <div className="my-8 text-center text-8xl">
        Our most outstanding features
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-10">
        <div className="w-96">
          <div className="relative block bg-[#F48F98] w-96 h-60 rounded-3xl group">
            <img
              src="/LandingPage/Features/manage.png"
              alt=""
              className="absolute pt-8 ml-20 w-44 h-52 group-hover:opacity-10"
            ></img>
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p class="ml-8 mr-8 text-2xl text-white break-normal pt-4">
                - Support of multiple content types &#40; e.g., text, files,
                images &#41;
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - User-generated content
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - Structured storage of learning materials
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - Course creation tools
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - Learning content search by titles
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold text-center">
            Learning Content Management
          </div>
        </div>

        <div className="w-96">
          <div className="relative block bg-[#FBA70E] w-96 h-60 rounded-3xl group">
            <img
              src="/LandingPage/Features/delivery.png"
              alt=""
              className="absolute h-48 pt-8 ml-24 w-44 group-hover:opacity-10"
            ></img>
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p class="ml-8 mr-8 text-2xl text-white break-normal pt-4">
                - Online assignments for learners
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - Learner performance assessment &#40; e.g., exercises, tests
                &#41;
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold text-center">
            Learning Content Delivery
          </div>
        </div>

        <div className="w-96">
          <div className="relative block bg-[#C7D9F2] w-96 h-60 rounded-3xl group">
            <img
              src="/LandingPage/Features/communication.png"
              alt=""
              className="absolute h-48 pt-8 w-44 ml-28 group-hover:opacity-10"
            ></img>
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p class="ml-8 mr-8 text-2xl text-white break-normal pt-4">
                - Chat by sending email
              </p>
              <p class="ml-8 mr-8 text-2xl text-white break-normal">
                - Notification sent to email
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold text-center">
            Communication and Notification
          </div>
        </div>

        <div className="w-96">
          <div className="relative block bg-[#69D06D] w-96 h-60 rounded-3xl group">
            <img
              src="/LandingPage/Features/security.png"
              alt=""
              className="absolute pt-8 w-44 h-52 ml-28 group-hover:opacity-10"
            ></img>
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p class="ml-8 mr-8 text-2xl text-white break-normal pt-4">
                - Role-based access to training materials and competence records
                &#40; e.g., courses, assignments, tests, grades &#41;
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold text-center">Security</div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
