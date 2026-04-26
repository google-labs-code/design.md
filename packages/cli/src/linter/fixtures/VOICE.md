---
name: Voice Demo
colors:
  primary: "#1a1c1e"
  on-primary: "#ffffff"
  surface: "#ffffff"
  on-surface: "#1a1c1e"
  error: "#b3261e"
  on-error: "#ffffff"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
voice:
  formality: 2
  warmth: 5
  authority: 3
  playfulness: 4
  person: second
  tense: present-active
  oxfordComma: true
  contractions: permitted
copy:
  casing:
    button: sentence-case
    nav: title-case
  buttonLabelMaxWords: 3
  errorPattern: "{what-happened}. {how-to-fix}."
  emptyStateTone: encouraging
  bannedTerms:
    - seamless
    - leverage
    - revolutionary
  bannedRegex:
    - "(?i)\\bgame[- ]?changer\\b"
  approvedTerms:
    user: customer
    dashboard: Home
  reservedNames:
    - DesignMD
components:
  registry:
    - name: button-cta
      kind: button
    - name: button-long
      kind: button
    - name: error-banner
      kind: error-message
  definitions:
    button-cta:
      label: "Save and continue"
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"
      padding: 12px
    button-long:
      label: "Sign up for our newsletter today"
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"
      padding: 12px
    error-banner:
      label: "We could not save your changes. Refresh and try again."
      backgroundColor: "{colors.error}"
      textColor: "{colors.on-error}"
      padding: 12px
---

## Brand & Style

A friendly, conversational brand that talks to customers like a knowledgeable neighbor.

## Colors

The palette is monochrome with a single error red.

## Typography

Inter for body and labels.

## Voice

The product talks to customers in a warm, conversational register. Contractions are welcome. Buttons stay short and use sentence-case.

## Layout

Standard 8px rhythm.

## Components

The `button-cta` is the system's primary call to action. Error messages always state what happened and how to fix it.

## Do's and Don'ts

- Do prefer "customer" over "user" — the brand insists.
- Don't let prose drift into buzzwords.
