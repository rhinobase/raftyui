// @ts-nocheck
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
import Warning from "@editorjs/warning";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: {
    class: LinkTool,
    // config: {
    //   endpoint: BASE_URL + "/api/editor/link",
    // },
  },
  image: {
    class: ImageTool,
    config: {
      // endpoints: {
      //   byFile: BASE_URL + "/api/editor/link",
      //   byUrl: BASE_URL + "/api/editor/link",
      // },
      // uploader: {
      //   uploadByFile: async (file: File) => {
      //     try {
      //       const filename = file.name.split(".");
      //       filename.pop();
      //       const signature = await endpoint()
      //         .get(
      //           `/spaces/${router.query.org}/signature?filename=${filename.join(
      //             "-",
      //           )}`,
      //         )
      //         .then((res) => res.data)
      //         .catch((err) => console.error(err));
      //       if (!signature) return null;
      //       // Adding the data
      //       const form = new FormData();
      //       form.set("file", file);
      //       form.set("api_key", signature.apikey);
      //       form.set("timestamp", signature.timestamp);
      //       form.set("signature", signature.signature);
      //       form.set("public_id", signature.public_id);
      //       // Sending the request to upload the data and returning the response
      //       return axios
      //         .post<any>(
      //           `https://api.cloudinary.com/v1_1/${signature.cloudname}/auto/upload`,
      //           form,
      //         )
      //         .then((res) => ({
      //           success: 1,
      //           file: {
      //             ...res.data,
      //             url: res.data.secure_url,
      //           },
      //         }));
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   },
      // },
    },
  },
  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 5,
      type: "text",
    },
  },
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  underline: Underline,
};
