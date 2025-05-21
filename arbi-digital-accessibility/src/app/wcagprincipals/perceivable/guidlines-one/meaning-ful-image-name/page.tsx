"use client";
import { useRouter } from "next/navigation";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import Logo from "../../../../../../public/WCAG.jpeg";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div className="text-center">
        <div className="text-start absolute">
          <button onClick={() => router.back()} className="back-link">
            Back Home
          </button>
        </div>
        <h1 className="text-center dark-color large-heading">
          1.1 Guideline / Meaningful Image Name
        </h1>
      </div>
      <ImageWithCaption
        src={Logo}
        alt="Arbisoft brand logo"
        caption="Arbisoft brand logo"
        width={400}
        height={100}
      />
      <CodeSnippet
        code={`<img alt="Arbisoft brand logo" width="125" height="30" style="color:transparent" src="/images/logo.svg" />`}
        language="html"
        label="this is the dmeo code"
      />
      
    </>
  );
}
