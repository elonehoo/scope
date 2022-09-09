<script setup lang="ts">
import { computed } from 'vue'
import SIconPreloader from '../icons/s-icon-preloader/s-icon-preloader.vue'

export type Size = 'mini' | 'small' | 'medium' | 'large' | 'jumbo'

export type Type = 'fill' | 'outline' | 'text'

export type Mode =
  | 'neutral'
  | 'white'
  | 'black'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'mute'

const props = defineProps<{
  tag?: string
  size?: Size
  type?: Type
  mode?: Mode
  icon?: object
  label?: string
  href?: string
  loading?: boolean
  rounded?: boolean
  block?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const classes = computed(() => [
  props.size ?? 'medium',
  props.type ?? 'fill',
  props.mode ?? 'neutral',
  { 'has-label': props.label },
  { 'has-icon': props.icon },
  { loading: props.loading },
  { rounded: props.rounded },
  { block: props.block },
  { disabled: props.disabled }
])

function handleClick(): void {
  !props.disabled && !props.loading && emit('click')
}
</script>

<template>
  <component
    :is="tag ?? 'button'"
    class="SButton"
    :class="classes"
    :href="href"
    role="button"
    @click="handleClick"
  >
    <span class="content">
      <span v-if="icon" class="icon"><component :is="icon" class="icon-svg" /></span>
      <span v-if="label" class="label">{{ label }}</span>
    </span>

    <transition name="fade">
      <span v-if="loading" key="loading" class="loader">
        <SIconPreloader class="loader-icon" />
      </span>
    </transition>
  </component>
</template>

<style scoped>
.SButton {
  position: relative;
  display: inline-block;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}
.SButton.fill.neutral {
  color: var(--button-fill-text);
  background-color: var(--button-fill-bg);
}
.SButton.fill.neutral:hover {
  background-color: var(--button-fill-bg-hover);
}
.SButton.fill.neutral:active {
  background-color: var(--button-fill-bg-focus);
}
.SButton.fill.neutral .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.white {
  color: var(--c-text-light-1);
  background-color: var(--c-white);
}
.SButton.fill.white:hover {
  background-color: var(--c-gray-light-3);
}
.SButton.fill.white:active {
  background-color: var(--c-gray-light-1);
}
.SButton.fill.white .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.black {
  color: var(--c-text-dark-1);
  background-color: var(--c-black);
}
.SButton.fill.black:hover {
  background-color: var(--c-gray-dark-4);
}
.SButton.fill.black:active {
  background-color: var(--c-gray-dark-3);
}
.SButton.fill.black .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.info {
  color: var(--c-text-dark-1);
  background-color: var(--c-info);
}
.SButton.fill.info:hover {
  background-color: var(--c-info-dark);
}
.SButton.fill.info:active {
  background-color: var(--c-info-darker);
}
.SButton.fill.info .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.success {
  color: var(--c-text-dark-1);
  background-color: var(--c-success);
}
.SButton.fill.success:hover {
  background-color: var(--c-success-dark);
}
.SButton.fill.success:active {
  background-color: var(--c-success-darker);
}
.SButton.fill.success .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.warning {
  color: var(--c-text-dark-1);
  background-color: var(--c-warning);
}
.SButton.fill.warning:hover {
  background-color: var(--c-warning-dark);
}
.SButton.fill.warning:active {
  background-color: var(--c-warning-darker);
}
.SButton.fill.warning .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.danger {
  color: var(--c-text-dark-1);
  background-color: var(--c-danger);
}
.SButton.fill.danger:hover {
  background-color: var(--c-danger-dark);
}
.SButton.fill.danger:active {
  background-color: var(--c-danger-darker);
}
.SButton.fill.danger .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.mute {
  border-color: var(--c-divider-light);
  color: var(--c-text-1);
  background-color: var(--c-bg-mute);
}
.SButton.fill.mute:hover {
  border-color: var(--c-divider);
  background-color: var(--c-gray-light-4);
}
.SButton.fill.mute:active {
  background-color: var(--c-bg-soft);
}
.SButton.fill.mute .loader-icon :deep(.bar) {
  fill: var(--c-black);
}
.dark .SButton.fill.mute {
  border-color: var(--c-divider-light);
  background-color: var(--c-gray-dark-4);
}
.dark .SButton.fill.mute:hover {
  border-color: var(--c-divider);
  background-color: var(--c-gray-dark-5);
}
.dark .SButton.fill.mute:active {
  background-color: var(--c-bg-soft);
}
.dark .SButton.fill.mute .loader-icon :deep(.bar) {
  fill: var(--c-white);
}
.SButton.fill.disabled {
  opacity: 0.75;
  cursor: not-allowed;
}
.SButton.fill.disabled.neutral:hover {
  background-color: var(--button-fill-bg);
}
.SButton.fill.disabled.neutral:active {
  background-color: var(--button-fill-bg);
}
.SButton.fill.disabled.white:hover {
  background-color: var(--c-gray-dark-4);
}
.SButton.fill.disabled.white:active {
  background-color: var(--c-gray-dark-3);
}
.SButton.fill.disabled.black {
  color: var(--c-text-dark-1);
  background-color: var(--c-white);
}
.SButton.fill.disabled.black:hover {
  background-color: var(--c-gray-light-3);
}
.SButton.fill.disabled.black:active {
  background-color: var(--c-gray-light-1);
}
.SButton.fill.disabled.info:hover {
  background-color: var(--c-info);
}
.SButton.fill.disabled.info:active {
  background-color: var(--c-info);
}
.SButton.fill.disabled.success:hover {
  background-color: var(--c-success);
}
.SButton.fill.disabled.success:active {
  background-color: var(--c-success);
}
.SButton.fill.disabled.warning:hover {
  background-color: var(--c-warning);
}
.SButton.fill.disabled.warning:active {
  background-color: var(--c-warning);
}
.SButton.fill.disabled.danger:hover {
  background-color: var(--c-danger);
}
.SButton.fill.disabled.danger:active {
  background-color: var(--c-danger);
}
.SButton.outline.neutral {
  border-color: var(--button-outline-border);
  color: var(--button-outline-text);
}
.SButton.outline.neutral:hover {
  background-color: var(--button-outline-bg-hover);
}
.SButton.outline.neutral:active {
  background-color: var(--button-outline-bg-focus);
}
.SButton.outline.white {
  border-color: var(--c-white);
  color: var(--c-text-dark-1);
}
.SButton.outline.white:hover {
  background-color: var(--c-white-mute);
}
.SButton.outline.white:active {
  background-color: var(--c-gray-light-4);
}
.SButton.outline.black {
  border-color: var(--c-black);
  color: var(--c-text-light-1);
}
.SButton.outline.black:hover {
  background-color: var(--c-black-mute);
}
.SButton.outline.black:active {
  background-color: var(--c-gray-dark-3);
}
.SButton.outline.info {
  border-color: var(--c-info);
  color: var(--c-info);
}
.SButton.outline.info:hover {
  border-color: var(--c-info-dark);
}
.SButton.outline.info:active {
  border-color: var(--c-info-darker);
}
.SButton.outline.success {
  border-color: var(--c-success);
  color: var(--c-success);
}
.SButton.outline.success:hover {
  border-color: var(--c-success-dark);
}
.SButton.outline.success:active {
  border-color: var(--c-success-darker);
}
.SButton.outline.warning {
  border-color: var(--c-warning);
  color: var(--c-warning);
}
.SButton.outline.warning:hover {
  border-color: var(--c-warning-dark);
}
.SButton.outline.warning:active {
  border-color: var(--c-warning-darker);
}
.SButton.outline.danger {
  border-color: var(--c-danger);
  color: var(--c-danger);
}
.SButton.outline.danger:hover {
  border-color: var(--c-danger-dark);
}
.SButton.outline.danger:active {
  border-color: var(--c-danger-darker);
}
.SButton.outline.disabled {
  opacity: .75;
  cursor: not-allowed;
}
.SButton.outline.disabled:hover {
  background-color: var(--button-secondary-bg);
}
.SButton.outline.disabled:active {
  background-color: var(--button-secondary-bg);
}
.SButton.outline.disabled.info:hover {
  border-color: var(--c-info);
}
.SButton.outline.disabled.info:active {
  border-color: var(--c-info);
}
.SButton.outline.disabled.success:hover {
  border-color: var(--c-success);
}
.SButton.outline.disabled.success:active {
  border-color: var(--c-success);
}
.SButton.outline.disabled.warning:hover {
  border-color: var(--c-warning);
}
.SButton.outline.disabled.warning:active {
  border-color: var(--c-warning);
}
.SButton.outline.disabled.danger:hover {
  border-color: var(--c-danger);
}
.SButton.outline.disabled.danger:active {
  border-color: var(--c-danger);
}
.SButton.outline.inverse {
  border-color: var(--button-secondary-inverse-border);
  color: var(--button-secondary-inverse-text);
}
.SButton.outline.inverse:hover {
  background-color: var(--button-secondary-inverse-bg-hover);
}
.SButton.outline.inverse:active {
  background-color: var(--button-secondary-inverse-bg-focus);
}
.SButton.text.neutral {
  color: var(--button-text-text);
}
.SButton.text.neutral:hover {
  background-color: var(--button-text-bg-hover);
}
.SButton.text.neutral:active {
  background-color: var(--button-text-bg-focus);
}
.SButton.text.info {
  color: var(--c-info);
}
.SButton.text.success {
  color: var(--c-success);
}
.SButton.text.warning {
  color: var(--c-warning);
}
.SButton.text.danger {
  color: var(--c-danger);
}
.SButton.text.disabled {
  opacity: .75;
  cursor: not-allowed;
}
.SButton.text.disabled.neutral:hover {
  background-color: var(--button-text-bg);
}
.SButton.text.disabled.neutral:active {
  background-color: var(--button-text-bg);
}
.SButton.mini {
  width: 28px;
  height: 28px;
  font-size: 12px;
}
.SButton.mini .icon-svg {
  width: 14px;
  height: 14px;
}
.SButton.mini.mini.rounded {
  border-radius: 14px;
}
.SButton.mini.mini.has-label {
  padding: 0 8px;
  width: auto;
}
.SButton.mini.mini.has-label.block {
  width: 100%;
}
.SButton.mini.mini.has-icon .label {
  padding-right: 1px;
  padding-left: 6px;
}
.SButton.small {
  width: 32px;
  height: 32px;
  font-size: 12px;
}
.SButton.small .icon-svg {
  width: 14px;
  height: 14px;
}
.SButton.small.small.rounded {
  border-radius: 16px;
}
.SButton.small.small.has-label {
  padding: 0 10px;
  width: auto;
}
.SButton.small.small.has-label.block {
  width: 100%;
}
.SButton.small.small.has-icon .label {
  padding-right: 1px;
  padding-left: 8px;
}
.SButton.medium {
  width: 40px;
  height: 40px;
  font-size: 14px;
}
.SButton.medium .icon-svg {
  width: 16px;
  height: 16px;
}
.SButton.medium.medium.rounded {
  border-radius: 20px;
}
.SButton.medium.medium.has-label {
  padding: 0 12px;
  width: auto;
}
.SButton.medium.medium.has-label.block {
  width: 100%;
}
.SButton.medium.medium.has-icon .label {
  padding-right: 1px;
  padding-left: 8px;
}
.SButton.large {
  width: 48px;
  height: 48px;
  font-size: 14px;
}
.SButton.large .icon-svg {
  width: 18px;
  height: 18px;
}
.SButton.large.large.rounded {
  border-radius: 24px;
}
.SButton.large.large.has-label {
  padding: 0 14px;
  width: auto;
}
.SButton.large.large.has-label.block {
  width: 100%;
}
.SButton.large.large.has-icon .label {
  padding-right: 2px;
  padding-left: 10px;
}
.SButton.jumbo {
  width: 64px;
  height: 64px;
  font-size: 14px;
}
.SButton.jumbo .icon-svg {
  width: 18px;
  height: 18px;
}
.SButton.jumbo.jumbo.rounded {
  border-radius: 32px;
}
.SButton.jumbo.jumbo.has-label {
  padding: 0 24px;
  width: auto;
}
.SButton.jumbo.jumbo.has-label.block {
  width: 100%;
}
.SButton.jumbo.jumbo.has-icon .label {
  padding-right: 2px;
  padding-left: 10px;
}
.SButton.block {
  display: block;
  width: 100%;
}
.SButton.loading.fill.neutral {
  color: var(--c-text-1);
}
.SButton.loading.fill.neutral:hover {
  background-color: var(--button-fill-bg);
}
.SButton.loading.fill.neutral:active {
  background-color: var(--button-fill-bg);
}
.SButton.loading.fill.white:hover {
  background-color: var(--c-white);
}
.SButton.loading.fill.white:active {
  background-color: var(--c-white);
}
.SButton.loading.fill.black:hover {
  background-color: var(--c-black);
}
.SButton.loading.fill.black:active {
  background-color: var(--c-black);
}
.SButton.loading.fill.info:hover {
  background-color: var(--c-info);
}
.SButton.loading.fill.info:active {
  background-color: var(--c-info);
}
.SButton.loading.fill.success:hover {
  background-color: var(--c-success);
}
.SButton.loading.fill.success:active {
  background-color: var(--c-success);
}
.SButton.loading.fill.warning:hover {
  background-color: var(--c-warning);
}
.SButton.loading.fill.warning:active {
  background-color: var(--c-warning);
}
.SButton.loading.fill.danger {
  color: var(--c-text-1);
}
.SButton.loading.fill.danger:hover {
  background-color: var(--c-danger);
}
.SButton.loading.fill.danger:active {
  background-color: var(--c-danger);
}
.SButton.loading.fill.mute:hover {
  border-color: var(--c-divider-light);
  background-color: var(--c-bg-mute);
}
.SButton.loading.fill.mute:active {
  background-color: var(--c-bg-mute);
}
.dark .SButton.loading.fill.mute:hover {
  border-color: var(--c-divider-light);
  background-color: var(--c-gray-dark-4);
}
.dark .SButton.loading.fill.mute:active {
  background-color: var(--c-gray-dark-4);
}
.SButton.loading.primary:hover {
  background-color: var(--button-primary-bg);
}
.SButton.loading.primary:active {
  background-color: var(--button-primary-bg);
}
.SButton.loading.primary.info:hover {
  background-color: var(--c-info-light);
}
.SButton.loading.primary.info:active {
  background-color: var(--c-info-light);
}
.SButton.loading.primary.success:hover {
  background-color: var(--c-success);
}
.SButton.loading.primary.success:active {
  background-color: var(--c-success);
}
.SButton.loading.primary.warning:hover {
  background-color: var(--c-warning);
}
.SButton.loading.primary.warning:active {
  background-color: var(--c-warning);
}
.SButton.loading.primary.danger:hover {
  background-color: var(--c-danger);
}
.SButton.loading.primary.danger:active {
  background-color: var(--c-danger);
}
.SButton.loading.primary.inverse:hover {
  background-color: var(--c-white);
}
.SButton.loading.primary.inverse:active {
  background-color: var(--c-white);
}
.SButton.loading.secondary:hover,
.SButton.loading.text:hover,
.SButton.loading.mute:hover {
  background-color: transparent;
}
.SButton.loading.secondary:active,
.SButton.loading.text:active,
.SButton.loading.mute:active {
  background-color: transparent;
}
.SButton.loading .content {
  opacity: 0;
  transform: scale(.9);
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: opacity 0.25s, transform 0.25s;
}
.icon-svg {
  fill: currentColor;
  transition: fill 0.25s;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  color: var(--c-text-1);
  transform: translate(-50%,-50%);
  transition: opacity 0.25s, transform 0.25s;
}
.loader.fade-enter,
.loader.fade-leave-to {
  opacity: 0;
  transform: translate(-50%,-50%) scale(1.5);
}
.loader-icon {
  width: 32px;
  height: 32px;
}
.SButton.primary {
  color: var(--button-primary-text);
  background-color: var(--button-primary-bg);
}
.SButton.primary:hover {
  background-color: var(--button-primary-bg-hover);
}
.SButton.primary:active {
  background-color: var(--button-primary-bg-focus);
}
.SButton.primary.info {
  color: var(--c-text-dark-1);
  background-color: var(--c-info);
}
.SButton.primary.info:hover {
  background-color: var(--c-info-dark);
}
.SButton.primary.info:active {
  background-color: var(--c-info-darker);
}
.SButton.primary.success {
  color: var(--c-text-dark-1);
  background-color: var(--c-success);
}
.SButton.primary.success:hover {
  background-color: var(--c-success-dark);
}
.SButton.primary.success:active {
  background-color: var(--c-success-darker);
}
.SButton.primary.warning {
  color: var(--c-text-dark-1);
  background-color: var(--c-warning);
}
.SButton.primary.warning:hover {
  background-color: var(--c-warning-dark);
}
.SButton.primary.warning:active {
  background-color: var(--c-warning-darker);
}
.SButton.primary.danger {
  color: var(--c-text-dark-1);
  background-color: var(--c-danger);
}
.SButton.primary.danger:hover {
  background-color: var(--c-danger-dark);
}
.SButton.primary.danger:active {
  background-color: var(--c-danger-darker);
}
.SButton.primary.disabled {
  opacity: .75;
  cursor: not-allowed;
}
.SButton.primary.disabled:hover {
  background-color: var(--button-primary-bg);
}
.SButton.primary.disabled:active {
  background-color: var(--button-primary-bg);
}
.SButton.primary.disabled.info:hover {
  background-color: var(--c-info);
}
.SButton.primary.disabled.info:active {
  background-color: var(--c-info);
}
.SButton.primary.disabled.success:hover {
  background-color: var(--c-success);
}
.SButton.primary.disabled.success:active {
  background-color: var(--c-success);
}
.SButton.primary.disabled.warning:hover {
  background-color: var(--c-warning);
}
.SButton.primary.disabled.warning:active {
  background-color: var(--c-warning);
}
.SButton.primary.disabled.danger:hover {
  background-color: var(--c-danger);
}
.SButton.primary.disabled.danger:active {
  background-color: var(--c-danger);
}
.SButton.primary .loader-icon :deep(.bar) {
  fill: var(--c-text-inverse-1);
}
.SButton.secondary {
  border-color: var(--button-secondary-border);
  color: var(--button-secondary-text);
}
.SButton.secondary:hover {
  background-color: var(--button-secondary-bg-hover);
}
.SButton.secondary:active {
  background-color: var(--button-secondary-bg-focus);
}
.SButton.secondary.info {
  border-color: var(--c-info);
  color: var(--c-info);
}
.SButton.secondary.info:hover {
  border-color: var(--c-info-dark);
}
.SButton.secondary.info:active {
  border-color: var(--c-info-darker);
}
.SButton.secondary.success {
  border-color: var(--c-success);
  color: var(--c-success);
}
.SButton.secondary.success:hover {
  border-color: var(--c-success-dark);
}
.SButton.secondary.success:active {
  border-color: var(--c-success-darker);
}
.SButton.secondary.warning {
  border-color: var(--c-warning);
  color: var(--c-warning);
}
.SButton.secondary.warning:hover {
  border-color: var(--c-warning-dark);
}
.SButton.secondary.warning:active {
  border-color: var(--c-warning-darker);
}
.SButton.secondary.danger {
  border-color: var(--c-danger);
  color: var(--c-danger);
}
.SButton.secondary.danger:hover {
  border-color: var(--c-danger-dark);
}
.SButton.secondary.danger:active {
  border-color: var(--c-danger-darker);
}
.SButton.secondary.disabled {
  opacity: .75;
  cursor: not-allowed;
}
.SButton.secondary.disabled:hover {
  background-color: var(--button-secondary-bg);
}
.SButton.secondary.disabled:active {
  background-color: var(--button-secondary-bg);
}
.SButton.secondary.disabled.info:hover {
  border-color: var(--c-info);
}
.SButton.secondary.disabled.info:active {
  border-color: var(--c-info);
}
.SButton.secondary.disabled.success:hover {
  border-color: var(--c-success);
}
.SButton.secondary.disabled.success:active {
  border-color: var(--c-success);
}
.SButton.secondary.disabled.warning:hover {
  border-color: var(--c-warning);
}
.SButton.secondary.disabled.warning:active {
  border-color: var(--c-warning);
}
.SButton.secondary.disabled.danger:hover {
  border-color: var(--c-danger);
}
.SButton.secondary.disabled.danger:active {
  border-color: var(--c-danger);
}
.SButton.secondary.inverse {
  border-color: var(--button-secondary-inverse-border);
  color: var(--button-secondary-inverse-text);
}
.SButton.secondary.inverse:hover {
  background-color: var(--button-secondary-inverse-bg-hover);
}
.SButton.secondary.inverse:active {
  background-color: var(--button-secondary-inverse-bg-focus);
}
.SButton.tertiary {
  border-color: transparent;
  color: var(--button-tertiary-text);
  background-color: var(--button-tertiary-bg);
}
.SButton.tertiary:hover {
  background-color: var(--button-tertiary-bg-hover);
}
.SButton.tertiary:active {
  background-color: var(--button-tertiary-bg-focus);
}
.SButton.tertiary.disabled {
  opacity: .75;
  cursor: not-allowed;
}
.SButton.tertiary.disabled:hover {
  background-color: var(--button-tertiary-bg);
}
.SButton.tertiary.disabled:active {
  background-color: var(--button-tertiary-bg);
}
.SButton.tertiary.inverse {
  border-color: transparent;
  color: var(--button-tertiary-inverse-text);
  background-color: var(--button-tertiary-inverse-bg);
}
.SButton.tertiary.inverse:hover {
  background-color: var(--button-tertiary-inverse-bg-hover);
}
.SButton.tertiary.inverse:active {
  background-color: var(--button-tertiary-inverse-bg-focus);
}
.SButton.mute {
  color: var(--button-mute-text);
}
.SButton.mute:hover {
  color: var(--button-mute-text-hover);
  background-color: var(--button-mute-bg-hover);
}
.SButton.mute:active {
  color: var(--button-mute-text-hover);
  background-color: var(--button-mute-bg-focus);
}
.SButton.mute.disabled {
  cursor: not-allowed;
}
.SButton.mute.disabled:hover {
  color: var(--button-mute-text);
  background-color: transparent;
}
.SButton.mute.disabled:active {
  color: var(--button-mute-text);
  background-color: transparent;
}
.SButton.mute.inverse {
  color: var(--button-mute-inverse-text);
}
.SButton.mute.inverse:hover {
  color: var(--button-mute-inverse-text-hover);
  background-color: var(--button-mute-inverse-bg-hover);
}
.SButton.mute.inverse:active {
  color: var(--button-mute-inverse-text);
  background-color: var(--button-mute-inverse-bg-focus);
}

</style>
