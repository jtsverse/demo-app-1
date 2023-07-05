import { Layout, Link, Page } from "@shopify/polaris";

export default function dashboard() {
  
    return (
        <Page>
            <TitleBar title={label}></TitleBar>
            <Layout>
                <Layout.Section>
                    <h1>
                        This is the Dashboard
                    </h1>
                    <Link url={"/"} external={false}> Home </Link>
                </Layout.Section>
            </Layout>
        </Page>
      )

}
