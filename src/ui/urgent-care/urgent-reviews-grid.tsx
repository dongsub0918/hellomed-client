import Image from "next/image";
import Link from "next/link";

interface ReviewItem {
  review: string;
  name: string;
}

const reviewItems: ReviewItem[] = [
  {
    review:
      "Clean, small office. Husband was able to get an appointment the same day. Paperwork all electronic through your phone. Chinese speaking doctor is in Wednesdays and Fridays which was helpful for another couple that was needing to be seen around the same time as us. Attentive and caring staff and doctors.",
    name: "Kara Schetter",
  },
  {
    review:
      "Great customer services! Our family visited here for the PCR test. They advised me about my insurance coverage. It was extremely easy and fast service. We needed the result next morning and they promptly helped us to get the result less than 24 hours. Thank you so much!",
    name: "Seong Won Choi",
  },
  {
    review:
      "Did immigration medical checkup from here. They were very professional. It was very easy to get appointment. Doctors and staff were very friendly and professional. They gave accurate suggestions for the required vaccinations. Highly recommended.",
    name: "Asha Luckins",
  },
  {
    review:
      "This is the third time I have been treated at this clinic. The staff are exceptionally kind and caring. I have been seen promptly. I was given treatment immediately for my breathing difficulties. The doctor explained the treatment and medications prescribed clearly. I will continue to come here for urgent care.",
    name: "Barbaranne Branca",
  },
  {
    review:
      "Hands down the best experience with an urgent care facility.  Making an appoint was very easy through the online form, and wait time was very short.  The staff is polite and helpful.  I hope many other urgent care facilities make HELLOMED a model of how an urgent care facility should operate.",
    name: "Yosuke Kanii",
  },
  {
    review:
      "I had my chest X-ray done and the DR was super nice and understanding. Staff members were polite and accommodating. I will definitely recommend them to others.",
    name: "Farie Khan",
  },
];

export default function UrgentReviewsGrid() {
  return (
    <div className="px-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-white shadow-md p-6 flex flex-col space-y-4 h-full"
          >
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  alt="review star"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg flex-grow">
              {item.review}
            </p>
            <p className="text-gray-900 font-semibold text-right mt-auto">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
