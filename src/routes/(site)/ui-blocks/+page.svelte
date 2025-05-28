<SEO title="UI Blocks" />
<ComingSoon title="Exciting UI blocks" />

<!-- <PageHead h1 = "Supercharge Your UI Workflow <br class='sm:hidden md:block'>with Ready UI Blocks" h2="Build beautiful apps in minutes, not hours." classes="text-start items-start">
  {#snippet afterCTA()}
    <p class="w-1/2">Drop-in UI blocks built specifically for Svelte and Tailwind — fast to implement, cleanly designed, and fully reusable. Skip the hassle of designing from scratch. Simply copy the block you need, paste it into your project, and focus on building great functionality instead of wasting time on layouts.</p>
    <div>
      <Button href="#" rounded="full" size="lg" class="me-4">Get Free Blocks</Button>
      <Button href="#" rounded="full" size="lg" outline>Explore Pricing</Button>
    </div>
  {/snippet}
</PageHead>

<Container>
  <h1 class="text-3xl font-bold text-center mb-8">THEUI UI BLOCKS</h1>
  <section class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
    {#each data.blockCategories as category}
      <Card class="dark:bg-secondary" title={category.title}>
        <a class="absolute inset-0" href={"ui-blocks/"+category.slug} aria-label={category.title + " link"}>&nbsp;</a>
      </Card>
    {/each}
  </section>
</Container> -->

<script lang="ts">
  import { Button, Card, Container } from 'theui-svelte'
  import SEO from "$lib/SEO.svelte"
  import PageHead from "$lib/ui/PageHeader.svelte"
  import ComingSoon from "$lib/ui/ComingSoon.svelte"

  const blocks = [
    {
      "title": "Blog Blocks",
      "slug": "blog",
      "blocks": [
        {
          "title": "Blog Card",
          "slug": "blog-card"
        },
        {
          "title": "Blog Grid/List",
          "slug": "blog-grid-list"
        },
        {
          "title": "Featured Post",
          "slug": "featured-post"
        },
        {
          "title": "Post Header",
          "slug": "post-header"
        },
        {
          "title": "Post Body",
          "slug": "post-body"
        },
        {
          "title": "Author Bio",
          "slug": "author-bio"
        },
        {
          "title": "Comments Section",
          "slug": "comments-section"
        },
        {
          "title": "Tags / Category Badges",
          "slug": "tags-category-badges"
        },
        {
          "title": "Related Posts",
          "slug": "related-posts"
        }
      ]
    },
    {
      "title": "Ecommerce Blocks",
      "slug": "ecommerce",
      "blocks": [
        {
          "title": "Product Card",
          "slug": "product-card"
        },
        {
          "title": "Product Grid/List",
          "slug": "product-grid-list"
        },
        {
          "title": "Product Details",
          "slug": "product-details"
        },
        {
          "title": "Cart Preview",
          "slug": "cart-preview"
        },
        {
          "title": "Checkout Form",
          "slug": "checkout-form"
        },
        {
          "title": "Order Summary",
          "slug": "order-summary"
        },
        {
          "title": "Filters & Sort",
          "slug": "filters-sort"
        },
        {
          "title": "Category Header",
          "slug": "category-header"
        },
        {
          "title": "Review Section",
          "slug": "review-section"
        },
        {
          "title": "Empty Cart / Wishlist",
          "slug": "empty-cart-wishlist"
        }
      ]
    },
    {
      "title": "Form Blocks",
      "slug": "forms",
      "blocks": [
        {
          "title": "Contact Form",
          "slug": "contact-form"
        },
        {
          "title": "Newsletter Signup",
          "slug": "newsletter-signup"
        },
        {
          "title": "Checkout Form",
          "slug": "checkout-form"
        },
        {
          "title": "Multi-step Form",
          "slug": "multi-step-form"
        },
        {
          "title": "Profile Update Form",
          "slug": "profile-update-form"
        },
        {
          "title": "Search Form",
          "slug": "search-form"
        },
        {
          "title": "Feedback Form",
          "slug": "feedback-form"
        },
        {
          "title": "Job Application Form",
          "slug": "job-application-form"
        },
        {
          "title": "Support Ticket Form",
          "slug": "support-ticket-form"
        },
        {
          "title": "Survey / Quiz Form",
          "slug": "survey-quiz-form"
        },
        {
          "title": "Reservation / Booking Form",
          "slug": "reservation-booking-form"
        },
        {
          "title": "Payment Form",
          "slug": "payment-form"
        }
      ]
    },
    {
      "title": "Authentication Blocks",
      "slug": "authentication",
      "blocks": [
        {
          "title": "Login Form",
          "slug": "login-form"
        },
        {
          "title": "Register / Signup Form",
          "slug": "register-signup-form"
        },
        {
          "title": "Reset Password Form",
          "slug": "reset-password-form"
        },
        {
          "title": "Welcome Screens",
          "slug": "welcome-screens"
        },
        {
          "title": "PIN Code",
          "slug": "pin-code"
        }
      ]
    },
    {
      "title": "Business Blocks",
      "slug": "business-sections",
      "blocks": [
        {
          "title": "Pricing",
          "slug": "pricing"
        },
        {
          "title": "Testimonials",
          "slug": "testimonials"
        },
        {
          "title": "Call to Action",
          "slug": "call-to-action"
        },
        {
          "title": "FAQ",
          "slug": "faq"
        },
        {
          "title": "Features",
          "slug": "features"
        },
        {
          "title": "Teams",
          "slug": "teams"
        },
        {
          "title": "Stats",
          "slug": "stats"
        }
      ]
    },
    {
      "title": "Page Blocks",
      "slug": "page-sections",
      "blocks": [
        {
          "title": "Navigation",
          "slug": "navigation"
        },
        {
          "title": "Hero Sections",
          "slug": "hero-sections"
        },
        {
          "title": "Cards",
          "slug": "cards"
        },
        {
          "title": "Tables",
          "slug": "tables"
        },
        {
          "title": "Pagination",
          "slug": "pagination"
        },
        {
          "title": "Alerts",
          "slug": "alerts"
        },
        {
          "title": "Modals",
          "slug": "modals"
        },
        {
          "title": "Popups",
          "slug": "popups"
        },
        {
          "title": "Footers",
          "slug": "footers"
        }
      ]
    }
  ]
</script>