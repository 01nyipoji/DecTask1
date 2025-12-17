import CourseCard from "./CourseCard";


const courses = [
{
title: "Statistics Data Science and Business Analysis",
price: "$39",
},
{
title: "Beginner Adobe Illustrator for Graphic Design",
price: "$49",
},
{
title: "Starting SEO As Your Home Based Business",
price: "$29",
},
];

export default function Courses() {
return (
<section className="px-10 py-20">
<div className="flex justify-between items-center mb-10">
<h3 className="text-2xl font-bold">
Edunity Course Student Can Join With Us
</h3>
<button className="text-indigo-600 font-medium">Load More Course →</button>
</div>


<div className="grid md:grid-cols-3 gap-8">
{courses.map((course, index) => (
<CourseCard key={index} course={course} />
))}
</div>
</section>
);
}