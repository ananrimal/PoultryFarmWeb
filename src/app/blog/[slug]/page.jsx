
import BackgroundBanner from '@/app/components/Home/BackgroundBanner';
import BodyText from '@/app/components/Home/BodyText';
import Heading from '@/app/components/Home/Heading';
import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const articles = [
  {
    slug: "from-hen-to-table",
    src: "/gallery/Egg-Production-System-in-Nepal.jpg",
    date: "September 28, 2025",
    title: "From Hen to Table: How Fresh Eggs Reach You",
    content: [
      "Every morning, our layer hens begin their day by producing fresh, nutritious eggs that make their way from our farm to your table. But have you ever wondered what happens between the moment an egg is laid and the moment it reaches your kitchen?",
      "At CoopFarm, we take every step of this journey seriously. Once collected, eggs are carefully inspected to ensure they meet our quality standards. They are sorted and graded according to their size, appearance, and condition, so that only the best eggs make it to our customers.",
      "After grading, the eggs are gently packed to protect them during handling and transportation. We pay close attention to cleanliness and proper handling throughout the process to maintain their freshness and quality.",
      "Our commitment doesn't stop at collecting and packing. We believe that good food starts with good farming practices. From caring for our hens and maintaining clean surroundings to handling every egg with care, each step reflects our dedication to providing fresh and reliable products.",
      "So, the next time you crack open an egg for breakfast, remember the journey behind it. From our farm to your kitchen, every egg carries the care, attention, and hard work of the people who make it possible."
    ]
  },
  {
    slug: "healthy-flocks-start",
    src: "/gallery/chickens.jpg",
    date: "September 28, 2025",
    title: "Healthy Flocks Start With Space and Clean Air",
    content: [
      "A healthy flock begins with a healthy environment. At CoopFarm, we believe that providing our chickens with clean, comfortable surroundings is an important part of responsible poultry farming.",
      "A roomy, well-ventilated shed helps maintain fresh air and gives our broilers space to move around comfortably. Clean bedding, fresh drinking water, and proper feeding routines are also important parts of their daily care.",
      "We regularly pay attention to the cleanliness of the poultry house and the condition of our flock. These everyday practices help create a better environment for our birds.",
      "For us, raising healthy poultry is not just about the final product. It is about the care, attention, and consistency that go into every day on the farm."
    ]
  },
  {
    slug: "a-day-in-the-life-of-a-poultry-farmer",
    src: "/gallery/feeding.jpg",
    date: "September 28, 2025",
    title: "A Day in the Life of a Poultry Farmer",
    content: [
      "Life on a poultry farm begins early in the morning. As the sun rises, farmers start their daily routines, making sure every bird has access to fresh water and proper feed.",
      "Throughout the day, farmers check the flock, monitor the poultry sheds, clean the surroundings, and make sure everything is running smoothly.",
      "From feeding the chickens to checking their health and maintaining clean living spaces, every task requires patience and attention.",
      "Behind every fresh egg and quality poultry product is the hard work of people who dedicate their days to caring for the flock. At CoopFarm, we value the people who make our farm what it is."
    ]
  }
];

export async function generateStaticParams() {
  return articles.map((item) => ({
    slug: item.slug
  }));
}

const BlogContent = async ({ params }) => {
  const { slug } = await params;

  const selectedArticle = articles.find(
    (item) => item.slug === slug
  );

  if (!selectedArticle) {
    notFound();
  }

  return (
    <div className="pb-20">

      <BackgroundBanner title={selectedArticle.title} />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-gray-500 mb-6">
          {selectedArticle.date}
        </p>

        <div className="relative w-full h-[450px] mb-10">
          <Image
            src={selectedArticle.src}
            alt={selectedArticle.title}
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>

        <Heading className="text-3xl mb-8">
          {selectedArticle.title}
        </Heading>

        <BodyText className="text-xl">
          <div className="space-y-6">
            {selectedArticle.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </BodyText>

      </div>
    </div>
  );
};

const BlogPage = ({ params }) => {
  return (
    <Suspense fallback={<p>Loading article...</p>}>
      <BlogContent params={params} />
    </Suspense>
  );
};

export default BlogPage;
