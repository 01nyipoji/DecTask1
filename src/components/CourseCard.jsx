export default function CourseCard({ course }) {
return (
<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
<img
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
alt="course"
className="h-48 w-full object-cover"
/>
<div className="p-6">
<h4 className="font-semibold mb-3">{course.title}</h4>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-600">{course.price}</span>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">
Enroll Now
</button>
</div>
</div>
</div>
);
}