import { TfiLocationPin } from "react-icons/tfi";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div className="mt-10">
        <div className="text-center text-2xl font-bold mb-10">Your Touch</div>
      <div className="flex gap-8 bg-neutral-50 py-8">
        <div className="w-1/3 shadow-xl bg-customWhite rounded-lg">
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <TfiLocationPin className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>40 Bulu Ocean Tower, Kemal Ataturk Ave, Dhaka 1213</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <MdMarkEmailUnread className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>info@bookish.com</p>
              <p>support@bookish.com</p>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-200 mx-4"></div>
          <div className="card bg-base-100 flex justify-center items-center py-6">
            <div>
              <LuPhoneCall className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <p>(+880) 1742460399</p>
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl rounded-xl bg-customWhite px-10 py-5">
          <div className="space-y-5 ">
            <h1 className="text-xl font-semibold">Just Say Hello!</h1>
            <p className="text-customGray">
            BookishBliss is a perfect blend of traditional bookstore charm and cutting-edge technology, offering a user-friendly and enjoyable platform for book lovers.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Say Hello..."
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-full h-36"
                placeholder="Subjects"
              ></textarea>
            </div>
            <button className="rounded-full px-14 btn bg-customBlack hover:bg-customGreen text-neutral-100">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="mb-10">
        <iframe 
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.700523887522!2d90.4028106047616!3d23.793676362079477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e61d7a8e5%3A0x2f089a60bc187f92!2sBulu%20Ocean%20Tower!5e0!3m2!1sen!2sbd!4v1714184376634!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;