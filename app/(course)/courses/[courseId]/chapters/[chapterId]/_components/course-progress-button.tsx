"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import toast from "react-hot-toast";

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId,
}: CourseProgressButtonProps) => {
  const router = useRouter();

  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/progress`,
        {
          isCompleted: !isCompleted,
        }
      );

      // If user just finished last course
      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      }

      toast.success("Progress updated");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  const Icon = isCompleted ? XCircle : CheckCircle;
  return (
    <Button
      type="button"
      variant={isCompleted ? "outline" : "success"}
      className="w-full md:w-auto"
      onClick={handleClick}
      disabled={isLoading} 
    >
      {isCompleted ? "Not completed" : "Mark as complete"}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default CourseProgressButton;
