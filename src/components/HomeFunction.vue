<template>
  <main>
    <section class="text-center fs-7">
      <div id="function-list" class="row row-cols-3 row-cols-lg-6 g-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col text-center"
        >
          <img
            :src="feature.icon"
            :alt="feature.name"
            class="img-fluid"
            @click="handleFeatureClick(feature.name)"
          />
          <p class="pt-1">{{ feature.name }}</p>
        </div>
      </div>

      <!-- Modal Bootstrap -->
      <div
        class="modal fade"
        id="supportModal"
        tabindex="-1"
        aria-hidden="true"
        ref="supportModal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Hỗ trợ khách hàng</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <p>📞 0901 234 567</p>
              <p>📞 0987 654 321</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>

      <InviteModal :show="showInviteModal" @close="showInviteModal = false" />
    </section>
  </main>
</template>

<script>
import InviteModal from "@/components/InviteModal.vue";
import { Modal } from "bootstrap";

export default {
  name: "HomeFunction",
  components: {
    InviteModal,
  },
  props: {
    features: Array,
  },
  data() {
    return {
      showInviteModal: false,
    };
  },
  methods: {
    handleFeatureClick(featureName) {
      switch (featureName) {
        case "Mời bạn":
          this.showInviteModal = true;
          break;
        case "Hỗ trợ":
          this.openSupportModal();
          break;
        case "Rút tiền":
          this.Cash();
          break;
        case "Cộng đồng":
          this.People();
          break;
        case "Nhiệm vụ":
          this.NhiemVu();
          break;
        case "Tài khoản":
          this.Profile();
          break;
      }
    },
    openSupportModal() {
      const modal = new Modal(this.$refs.supportModal);
      modal.show();
    },
    Cash() {
      this.$router.push({ path: "/cash" });
    },
    People() {
      this.$router.push({ path: "/people" });
    },
    NhiemVu() {
      this.$router.push({ path: "/wallet" });
    },
    Profile() {
      this.$router.push({ path: "/profile" });
    },
  },
};
</script>
