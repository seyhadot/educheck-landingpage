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
          title="តាមដានអវត្តមាន"
          content="អ្នកនឹងទទួលបានពត៌មានស្តីពីវត្តមានរបស់អ្នកនៅក្នុងថ្នាក់រៀន បន្ទាប់ពីលោកគ្រូអ្នកគ្រូកត់វត្តមានរបស់អ្នកចំណាត់ថ្នាក់ និងពិន្ទុ
អ្នកនឹងទទួលបានពត៌មានស្តីពីពិន្ទុ និងចំណាត់ថ្នាក់"
          :features="runningFeature"
          image="../../public/assets/educheck/3.png"
          dark-image="../../public/assets/educheck/3.png"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle=""
          title="តាមដានកាលវិភាគ"
          content="មើកកាលវិភាគសិក្សាប្រចាំថ្ងៃរបស់អ្នក"
          :features="reportFeature"
          image="../../public/assets/educheck/4.png"
          dark-image="../../public/assets/educheck/4.png"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle title="តាមដានពិន្ទុប្រចាំខែ / ប្រចាំឆមាស" subtitle="" />

        <AppSectionShapes
          :features="dashboardFeature"
          image="../../public/assets/educheck/wall.png"
          dark-image="../../public/assets/educheck/wall.png"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="បន្ទាន់សម័យការសិក្សារបស់អ្នក"
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
  