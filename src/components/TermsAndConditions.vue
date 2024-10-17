<script>
import { TermsAndConditions, TermsAndConditionsHighlights, TermsAndConditionsIntroduction } from '../CustomerFriendlySettings.js'
export default {
  name: "TermsAndConditions",
  data() {
    return {
      highlightedTerms: TermsAndConditionsHighlights,
      terms: TermsAndConditions,
      termsIntro: TermsAndConditionsIntroduction
    }

  }
}
</script>

<template>
  <Accordion class="outer-accordion" value="0">
    <AccordionPanel value="0">
      <AccordionHeader>Terms and Conditions</AccordionHeader>
      <AccordionContent >
        <div style="text-align: left; margin-bottom:64px" v-html="termsIntro"></div>

        <h3>Highlights</h3>
        <div v-for="(term) in highlightedTerms" style="margin-bottom: 12px; text-align: left">
          {{term.icon}} <b>{{term.bold}}</b> <br> {{term.description}}
        </div>
        <Accordion style="background-color: var(--p-card-background)" class="inner-accordion" value="1" >
          <AccordionPanel v-for="(term, i) in terms" :value="i" style="margin:0px;">
            <AccordionHeader style="margin:0px; background-color: var(--p-card-background)">
              {{i+1}}. {{term.termTitle}}
            </AccordionHeader>
            <AccordionContent style="margin:0px; padding-top:8px; background-color: var(--p-card-background)">
              <p style="margin:0px; text-align: left; background-color: var(--p-card-background)" v-html="term.termDescription"></p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </AccordionContent>
    </AccordionPanel>

  </Accordion>

</template>

<style scoped>

.outer-accordion{
  margin: 32px 0 32px 0;
  width: 80%;
}

:deep(.p-accordioncontent-content){
  border-radius: 0 0 12px 12px;
}

.inner-accordion {
  width:100%;
}

.inner-accordion :deep(.p-accordioncontent-content){
  background-color: var(--p-card-background);
}

@media(max-width:1200px){
  .outer-accordion{
    width: 95%;
  }
}
</style>