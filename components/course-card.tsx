import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";

interface CourseCardProps {
  id: string;
  title: string;
  progress: number | null;
  category: string;
  price: number;
  imageUrl: string;
  chaptersLength: number;
}

export const CourseCard = ({
  id,
  title,
  progress,
  category,
  price,
  imageUrl,
  chaptersLength,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg h-full">
        <div className="p-2">
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image fill className="object-cover" alt={title} src={imageUrl} />
          </div>
        </div>
        <div className="flex flex-col p-3 pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span className="">
                {chaptersLength} {chaptersLength === 1 ? "chapter" : "chapters"}
              </span>
            </div>
          </div>
          {progress !== null ? (
            <div>Progress components</div>
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
