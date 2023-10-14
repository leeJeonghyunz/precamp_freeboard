import dynamic from "next/dynamic";

export const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
