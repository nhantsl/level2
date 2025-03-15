<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Mời bạn bè</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <table class="table table-hover align-middle">
            <tbody>
              <tr v-for="friend in friends" :key="friend.name">
                <td class="text-center">
                  <img :src="friend.avatar" alt="Avatar" class="avatar-img" />
                </td>
                <td>{{ friend.name }}</td>
                <td>
                  <button type="button" class="btn" :class="friend.buttonClass">
                    {{ friend.buttonText }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="invite-section">
            <p class="text-muted">
              Nhập email hoặc số điện thoại để mời bạn bè:
            </p>
            <div class="input-group gap-2">
              <input
                v-model="inviteInput"
                type="text"
                class="form-control"
                placeholder="Nhập email hoặc số điện thoại"
                autofocus
                @keyup.enter="sendInvite"
              />
              <button type="button" class="btn btn-primary" @click="sendInvite">
                Gửi mời
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="show" class="modal-backdrop fade show"></div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

const inviteInput = ref("");

const friends = ref([
  {
    name: "Otto",
    avatar: require("@/assets/img/Avatar.svg"),
    buttonText: "Mời",
    buttonClass: "btn-outline-primary",
  },
  {
    name: "Thornton",
    avatar: require("@/assets/img/Avatar.svg"),
    buttonText: "Mời",
    buttonClass: "btn-outline-primary",
  },
  {
    name: "Larry the Bird",
    avatar: require("@/assets/img/Avatar.svg"),
    buttonText: "Bỏ qua",
    buttonClass: "btn-outline-danger",
  },
]);

const closeModal = () => emit("close");

const sendInvite = () => {
  if (inviteInput.value.trim() !== "") {
    alert(`Đã gửi lời mời đến: ${inviteInput.value}`);
    inviteInput.value = "";
    closeModal();
  } else {
    alert("Vui lòng nhập email hoặc số điện thoại.");
  }
};
</script>

<style scoped>
/* Cải thiện avatar */
.avatar-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Điều chỉnh bảng */
.table-hover tbody tr:hover {
  background-color: #f8f9fa;
}

.modal-body {
  padding: 20px;
}

.invite-section {
  margin-top: 15px;
  text-align: center;
}

/* Cải thiện backdrop */
.modal-backdrop {
  background: rgba(0, 0, 0, 0.6);
}
</style>
