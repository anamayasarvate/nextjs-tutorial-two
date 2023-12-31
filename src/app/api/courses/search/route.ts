import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (query !== null) {
    const filteredCourses = courses.filter((course) => {
      return course.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredCourses);
  }
}
