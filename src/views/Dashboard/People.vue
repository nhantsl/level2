<template>
  <div>
    <PeopleHeader />
    <main class="container">
      <PeopleSummary />
      <PeopleTags />
      <PeopleDescription />
      <PeopleWorkMethod />
      <PeoplePopup />
    </main>
  </div>
</template>

<script setup>
import PeopleHeader from "@/components/layout/PeopleHeader.vue";
import PeopleSummary from "@/components/ui/PeopleSummary.vue";
import PeopleTags from "@/components/ui/PeopleTags.vue";
import PeopleDescription from "@/components/ui/PeopleDescription.vue";
import PeopleWorkMethod from "@/components/ui/PeopleWorkMethod.vue";
import PeoplePopup from "@/components/ui/PeoplePopup.vue";
</script>
