import Card from "./Card";

const blog = [
  {
    title: "Mental Health Issues among Adolescents",
    desc: "Adolescence is a crucial stage of development characterized by changes in physical, emotional, social, and cognitive domains. During this period, adolescents encounter various challenges such as peer pressure, academic pressure, and family conflicts that can have a significant impact on their mental health. Mental health issues among adolescents have become a significant concern for parents, educators, and mental health professionals. In this article, we will explore some of the common mental health issues among adolescents, their causes, and the strategies that can be adopted to address them.",
    url: "blog1",
  },
  {
    title: "Mental Health at the Workplace",
    desc: "Mental health has emerged as a critical issue in modern society, and the workplace is no exception. Workplace stress, anxiety, and depression have become increasingly prevalent, leading to significant economic and social costs. Poor mental health not only affects an employee's productivity but also impacts their physical health and overall quality of life. Therefore, mental health care for employees has become a top priority at every workplace.",
    url: "blog2",
  },
  {
    title: "Expressive Arts Therapies- A Deep Analysis",
    desc: "Expressive Arts Therapies (EAT) is a form of therapy that incorporates various art forms to support individuals in enhancing their emotional, social, cognitive, and physical well-being. This therapy modality includes music therapy, art therapy, drama therapy, dance/movement therapy, and play therapy. EAT has a rich history dating back to the 1940s and 50s when artists and therapists began to work together to explore the benefits of using the creative arts as a tool for therapy.",
    url: "blog3",
  },
  {
    title:
      "Anger Management: Techniques and Strategies for Controlling Your Emotions",
    desc: "Anger is a natural and healthy emotion, but when it gets out of control, it can have a negative impact on our relationships, work, and overall well-being. Anger management is the process of learning how to recognize and control our anger in a healthy way. In this article, we'll discuss techniques and strategies for managing anger effectively.",
    url: "blog4",
  },
  {
    title:
      "Horoscope Today, November 7, 2023: Read your daily astrological prediction for Aries, Taurus and Others",
    desc: "Read today's horoscope, November 7, 2023. Today we'll be taking a closer look at what the stars have in store for each of the 12 zodiac signs. Our astrologer has analyzed the movements of the planets and the alignment of the stars to bring you the most accurate and up-to-date horoscope predictions for the day ahead. Whether you're looking for guidance on love, career, or simply a heads up on what to expect, this has got you covered. Let's dive in to see what the cosmos have in store for you today.",
    url: "blog4",
  },
];

export default function Overview() {
  return (
    <>
      <main className="grid lg:grid-cols-12 gap-8 my-12">
        {blog.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            desc={item.desc.slice(0, 150)}
            url={item.url}
          />
        ))}
      </main>
    </>
  );
}
