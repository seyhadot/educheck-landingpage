<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'

const translated = ref('')
setTimeout(() => {
  translated.value = 'is-translated'
}, 1500)
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight" mask="wave">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5 mb-5 font-change">
          <Title tag="h1" :size="2" weight="bold" class="kh">
            <span class="kh text-primary">EDUCHECK</span>
            ជាកម្មវិធី សម្រាប់ផ្តល់ព័ត៌មានសិក្សាដល់សិស្ស និងអាណាព្យាបាល
            <!-- <span class="text-primary">Parents</span> -->
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
          ></Subtitle>
          <!--Buttons-->

          <div class="buttons is-relative z-1">
            <DownloadCta
              apple-url="https://apps.apple.com/kh/app/educheck/id6446472860"
              google-url="https://play.google.com/store/apps/details?id=com.educheck.app"
            />
          </div>
        </div>
        <div class="column is-7 is-offset-1">
          <div class="hero-image-container">
            <div class="image-container">
              <DarkImage
                class="main-image"
                src="/assets/educheck/1.png"
                src-dark="/assets/educheck/2.png"
                alt="Hero mockup"
                width="562"
                height="1000"
              />
              <DarkImage
                class="sub-image"
                :class="translated"
                src="/assets/educheck/2.png"
                src-dark="/assets/educheck/1.png"
                alt="Hero mockup"
                width="562"
                height="1000"
              />
              <!--Floating avatar-->
              <!-- <div class="floating-avatar floating-avatar-1">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="large"
                />
              </div>
              <div class="floating-avatar floating-avatar-2">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
              </div>
              <div class="floating-avatar floating-avatar-3">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="small"
                />
              </div>
              <div class="floating-avatar floating-avatar-4">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
              </div> -->
            </div>
            <div class="hero-bg-circle"></div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <div class="tabs is-centered pb-4">
          <span class="text-center"></span>
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-image-container {
  position: relative;

  .image-container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;

    .main-image {
      position: relative;
      z-index: 1;
      &:hover {
        z-index: 999;
      }
    }

    .sub-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      z-index: 0;
      transition: transform 0.3s;

      &.is-translated {
        transform: translate(6rem, 3rem);
      }
      &:hover {
        z-index: 999;
      }
    }

    .floating-avatar {
      position: absolute;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--spread-shadow);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s, border-color 0.3s;
      z-index: 3;

      &.floating-avatar-1 {
        top: 210px;
        right: -80px;
        height: 76px;
        width: 76px;
      }

      &.floating-avatar-2 {
        top: 140px;
        right: -140px;
        height: 60px;
        width: 60px;
      }

      &.floating-avatar-3 {
        top: 90px;
        right: -20px;
        height: 36px;
        width: 36px;
      }

      &.floating-avatar-4 {
        bottom: 140px;
        left: 5px;
        height: 60px;
        width: 60px;
      }
    }
  }

  .hero-bg-circle {
    position: absolute;
    top: 10%;
    right: -20%;
    height: 550px;
    width: 550px;
    border-radius: 50%;
    background: rgb(var(--primary-rgb));
    background: linear-gradient(
      98deg,
      rgb(var(--primary-rgb) / 100%) 0%,
      rgb(var(--primary-rgb) / 28.9%) 35%,
      rgb(var(--primary-rgb) / 0%) 100%
    );
    z-index: 0;
  }
}

@media only screen and (max-width: 767px) {
  .product-hero {
    text-align: center;

    :deep(.title) {
      margin-top: 3rem;

      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }
  }

  .hero-image-container {
    .image-container {
      .sub-image {
        transform: scale(0.9);

        &.is-translated {
          transform: scale(0.8) translate(6rem, 1rem);
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    :deep(.title) {
      margin-top: 3rem;
      font-size: 2.25rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }

    :deep(.subtitle) {
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }

    .buttons {
      justify-content: center;
    }

    .hero-image-container {
      .hero-bg-circle {
        top: 3%;
        right: 5%;
      }
    }
  }
}
</style>
