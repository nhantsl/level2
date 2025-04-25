<!-- Modal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-container">
      <div class="modal-header">
        <button class="close-btn" @click="close">&times;</button>
        <h3 class="modal-title">{{ title }}</h3>
      </div>
      <div class="modal-body">
        <slot></slot> <!-- Nội dung của modal sẽ được chèn vào đây -->
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" @click="close">Đóng</button>
        <button class="btn btn-primary" @click="confirm">Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "Modal Tiêu Đề",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: this.visible,
    };
  },
  watch: {
    visible(newVal) {
      this.isVisible = newVal;
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false); // Gửi sự kiện về cha để thay đổi trạng thái modal
    },
    confirm() {
      this.$emit("confirm"); // Gửi sự kiện xác nhận
      this.close();
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #ccc;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}
</style>
