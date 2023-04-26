<route lang="yaml">
  meta:
    layout: default
  </route>
  
  <script setup lang="ts">
import {
  mobileAppFeatures,
  runningFeature,
  reportFeature,
  dashboardFeature,
  workoutTimeline,
  workoutPricingPlans,
  workoutTestimonials,
  workoutFaq,
} from '/@src/data/pages/workout'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>
  
  <template>
  <div>
    <HeroE1 />

    <Section wave="wave-1" shape-color="grey">
      <Container>
        <FeatureBlockA
          alignment="centered"
          :features="mobileAppFeatures"
          :columns="3"
          :limit="8"
          size="medium"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle=""
          title="វត្តមានសិក្សា"
          content="អ្នកនឹងទទួលបានពត៌មានស្តីពីវត្តមានសិក្សារបស់អ្នកនៅក្នុងថ្នាក់រៀន បន្ទាប់ពីលោកគ្រូអ្នកគ្រូកត់វត្តមានរបស់អ្នក"
          :features="runningFeature"
          image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/3.png?alt=media&token=a6f7da5d-1381-453c-9751-4712cb54aa51"
          dark-image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/3.png?alt=media&token=a6f7da5d-1381-453c-9751-4712cb54aa51"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle=""
          title="កាលវិភាគសិក្សា"
          content="មើកកាលវិភាគសិក្សាប្រចាំថ្ងៃរបស់អ្នក"
          :features="reportFeature"
          image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/4.png?alt=media&token=8177ab67-b560-473e-b2b0-2746ed40078c"
          dark-image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/4.png?alt=media&token=8177ab67-b560-473e-b2b0-2746ed40078c"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="តាមដានពិន្ទុប្រចាំខែ / ប្រចាំឆមាស / ប្រចាំឆ្នាំ"
          subtitle=""
        />

        <AppSectionShapes
          :features="dashboardFeature"
          image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/wall.png?alt=media&token=1de9b1c4-35fc-498c-8a8f-c6027f327545"
          dark-image="https://firebasestorage.googleapis.com/v0/b/educheck-9cb55.appspot.com/o/wall.png?alt=media&token=1de9b1c4-35fc-498c-8a8f-c6027f327545"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="ត្រួតពិនិត្យការសិក្សារបស់អ្នក"
          subtitle="ដំណើរការងាយៗសម្រាប់"
        />

        <TimelineFeatures :items="workoutTimeline" />
      </Container>
    </Section>

    <Section tongue="tongue-1">
      <Container>
        <PricingDuo
          title="គម្រោងរបស់កម្មវិធី"
          subtitle="កម្មវិធីនេះនឹងប្រើប្រាស់ដោយឥតគិតថ្លៃ ដោយគ្រាន់តែសិស្សធ្វើការជាវកាតសិស្សចេញពីសាលារៀនរបស់ពួកគេ"
          :plans="workoutPricingPlans"
          rounded
          polka-dots
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="093 556-675, 015 427-757, 012512661"
          subtitle="ទំនាក់ទំនងដើម្បីប្រើប្រាស់កម្មវិធី"
        />
      </Container>
    </Section>

    <!-- <TestimonialsCarouselColor :slides="workoutTestimonials" /> -->

    <!-- <Section tongue="tongue-2" bottom-narrow>
      <Container>
        <SectionTitle
          title="Take the time to read our FAQs"
          subtitle="Frequently Asked"
        />

        <DoubleFaqCollapse
          :left="workoutFaq.left"
          :right="workoutFaq.right"
          chevrons
        />

        <CtaBlockB
          title-primary="Start Now!"
          content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-primary="Free Trial"
          cta-primary-link="/"
          title-secondary="More info?"
          content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-secondary="Contact Us"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />
      </Container>
    </Section> -->

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
                non possum. Apparet statim, quae sint officia, quae actiones."
      color="default"
    />
  </div>
</template>
  