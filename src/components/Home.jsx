import React from "react";
import vg from "../assets/tech2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      {/* home1 starts here */}
      <div className="home" id="home">
        <main>
          <h1>TechKura</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      {/* home1 ends here */}
      {/* ------------------------- */}
      {/* home2 starts here */}
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      {/* home2 ends here */}
      {/* ------------------------- */}
      {/* home3 starts here */}
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            officia nemo? Voluptates deserunt temporibus laboriosam commodi
            reprehenderit rem? In, atque obcaecati officia facilis dicta
            laboriosam neque expedita illum labore reiciendis vero inventore
            iste esse ducimus saepe incidunt aspernatur tenetur cupiditate
            laborum sint omnis officiis minima molestiae harum. Odio quaerat
            laboriosam ea quas tempore impedit. Magnam, esse repellat quod illo
            quam blanditiis illum saepe cum itaque praesentium quo voluptas
            quibusdam amet eligendi sequi nesciunt molestiae culpa quidem
            dolores? Labore quisquam corporis perspiciatis odio officiis
            inventore doloribus exercitationem aliquid, explicabo impedit
            voluptates eos accusamus. Ipsum debitis reprehenderit ullam minima
            similique natus sapiente!
          </p>
        </div>
      </div>
      {/* home3 ends here */}
      {/* home4 starts here */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
      {/* home4 ends here */}
    </>
  );
};

export default Home;
