// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react"
import { PlasmicHomepage2 } from "../components/plasmic/minimalist_about_me_page/PlasmicHomepage2"

<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://codegen.plasmic.app/api/v1/loader/html/preview/68FsTXs8g8hH9RGmk7R9kt/Homepage2?hydrate=1&embedHydrate=1");
// Provide the project ID and public API token.
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
  "x-plasmic-api-project-tokens: 68FsTXs8g8hH9RGmk7R9kt:KjxJ0UhrTBwYnuu7obKEEBHY7d9Bdn8Grz5afN5Kh0MzeXcIel95ZAS5nEJ0DlQe9zHrUTJJbP1aY0EknQ"
));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);
curl_close($curl);

$result = json_decode($response);
echo $result->html;
?>
  
function Homepage2() {
  // Use PlasmicHomepage2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepage2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return <PlasmicHomepage2 />
}

export default Homepage2
