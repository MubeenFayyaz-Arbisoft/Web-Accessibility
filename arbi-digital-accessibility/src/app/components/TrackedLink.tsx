// components/TrackedLink.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TrackedLinkProps {
  href: string;
  id: string;
  accordionIndex?: number; // optional now
  children: React.ReactNode;
  className?: string;
}

const TrackedLink = ({
  href,
  id,
  accordionIndex,
  children,
  className,
}: TrackedLinkProps) => {
  // this component is only for the back button login for inside accordion and outside accordion
  const pathname = usePathname();

  const handleClick = () => {
    // Logic of inside and outside of the link
    localStorage.setItem("lastFocusedId", id);
    if (accordionIndex !== undefined) {
      localStorage.setItem("accordionIndex", accordionIndex.toString());
    } else {
      localStorage.removeItem("accordionIndex");
    }
    localStorage.setItem("backToPath", pathname);
  };

  return (
    <Link
      href={href}
      id={id}
      onClick={handleClick}
      scroll={false}
      className={className}
    >
      {children}
    </Link>
  );
};

export default TrackedLink;


// accordion outside link with unique id

{
  /* <TrackedLink
href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
id="meaningful-image-link4"
className="font-bold link-color-blue underline"
>
just for testing outside
</TrackedLink> */
}

// accordion inside link with unique id and the accordionIndex number reference of the

{/* <TrackedLink
  href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
  id="meaningful-image-link3"
  accordionIndex={0}
  className="font-bold link-color-blue underline"
>
  Meaningful Image Name Demo
</TrackedLink>; */}
