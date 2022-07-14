import { defineComponent, reactive } from 'vue-demi'
import type { MaybeComputedRef } from '@vueuse/shared'
import type { UseTimeAgoOptions } from '@vueuse/core'
import { useTimeAgo } from '@vueuse/core'

interface UseTimeAgoComponentOptions extends Omit<UseTimeAgoOptions<true>, 'controls'> {
  time: MaybeComputedRef<Date | number | string>
}

export const UseTimeAgo = defineComponent<UseTimeAgoComponentOptions>({
  name: 'UseTimeAgo',
  props: ['time', 'updateInterval', 'max', 'fullDateFormatter', 'messages'] as unknown as undefined,
  setup(props, { slots }) {
    const data = reactive(useTimeAgo(() => props.time as number, { ...props, controls: true }))

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
