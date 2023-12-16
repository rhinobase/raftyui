---
title: Rafty UI + Formik
nextjs:
  metadata:
    title: Rafty UI + Formik
    description: Formik
    twitter:
      title: Rafty UI + Formik
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20Formik
    openGraph:
      title: Rafty UI + Formik
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20Formik
---

The way we start building forms with [Formik](https://formik.org/) is by using its `useFormik` hook that returns us the formik instance. That Formik instance contains pretty much everything we need to connect our form's UI elements and submit handler. Let's see a pure React + Formik example:

{% sandpack name="formik" / %}
