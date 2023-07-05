import { TitleBar } from "@shopify/app-bridge-react";
import { Layout, Link, Page, TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";


// HomePage Function can be name anyway you want
// This file is the index file so it will be read first
export default function HomePage() {

  const [firstname, setFirstname] = useState('');
  
  const handleFirstname = (e) => {
    setFirstname(e);
    console.log(e);
  }


  return (
    <Page>
      <TitleBar title="Demo App 1"></TitleBar>
      <Layout>
        <Layout.Section>
          <TextField
            label="First Name"
            value={firstname}
            onChange={ handleFirstname }
          />

          {/* For Dynamic Link
              <Link
                onClick={() => {
                  const url = `/products/${id}`;
                  redirect.dispatch(Redirect.Action.APP, url);
                }}
              >
                
                <Text as="p" alignment="center" variant="bodyMd" fontWeight="bold">{product.title}</Text>
              </Link>
          */}

          <Link url={"/dashboard"} external={false}>To dashboard</Link>
        </Layout.Section>
      </Layout>
    </Page>
  )  
}