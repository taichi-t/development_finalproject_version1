import React from "react"
import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import ContactForm from "../components/ContactForm/ContactForm"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  render() {
    return (
      <CenteredLayout>
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>
        <section className="page-main__section contact-page-main__section">
          <ContactForm />
        </section>
      </CenteredLayout>
    )
  }
}

export default About
