<template>
  <a-menu
    key="menu"
    v-model:openKeys="keysOfOpen"
    v-model:selectedKeys="keysOfSelected"
    :mode="mode"
    :theme="theme"
    :style="menuStyle"
  >
    <template
      v-for="item in data"
    >
      <a-sub-menu
        v-if="item.children && item.children.length && item.hideChildren!==true"
        :key="item.id"
      >
        <template #icon>
          <menu-icon :url="item.icon" />
        </template>
        <template #title>
          {{ item.text }}
        </template>
        <template v-for="item1 in item.children">
          <a-sub-menu
            v-if="item1.children && item1.children.length && item1.hideChildren!==true"
            :key="item1.id"
          >
            <template #icon>
              <menu-icon :url="item1.icon" />
            </template>
            <template #title>
              {{ item1.text || "aaa" }}
            </template>
            <template v-for="item2 in item1.children">
              <a-sub-menu
                v-if="item2.children && item2.children.length && item2.hideChildren!==true"
                :key="item2.id"
              >
                <template #icon>
                  <menu-icon :url="item2.icon" />
                </template>
                <template #title>
                  {{ item2.text }}
                </template>
                <template v-for="item3 in item2.children">
                  <a-sub-menu
                    v-if="item3.children && item3.children.length && item3.hideChildren!==true"
                    :key="item3.id"
                  >
                    <template #icon>
                      <menu-icon :url="item3.icon" />
                    </template>
                    <template #title>
                      {{ item3.text }}
                    </template>
                    <template v-for="item4 in item3.children">
                      <a-sub-menu
                        v-if="item4.children && item4.children.length && item4.hideChildren!==true"
                        :key="item4.id"
                      >
                        <template #icon>
                          <menu-icon :url="item4.icon" />
                        </template>
                        <template #title>
                          {{ item4.text }}
                        </template>
                        <template v-for="item5 in item4.children">
                          <a-sub-menu
                            v-if="item5.children && item5.children.length && item5.hideChildren!==true"
                            :key="item5.id"
                          >
                            <template #icon>
                              <menu-icon :url="item5.icon" />
                            </template>
                            <template #title>
                              {{ item5.text }}
                            </template>
                            <template v-for="item6 in item5.children">
                              <a-sub-menu
                                v-if="item6.children && item6.children.length && item6.hideChildren!==true"
                                :key="item6.id"
                              >
                                <template #icon>
                                  <menu-icon :url="item6.icon" />
                                </template>
                                <template #title>
                                  {{ item6.text }}
                                </template>
                              </a-sub-menu>
                              <a-menu-item
                                v-else
                                :key="item6.id"
                                @click="onMenuItemClick(item6)"
                              >
                                <template #icon>
                                  <menu-icon :url="item6.icon" />
                                </template>
                                <span>{{ item6.text }}</span>
                              </a-menu-item>
                            </template>
                          </a-sub-menu>
                          <a-menu-item
                            v-else
                            :key="item5.id"
                            @click="onMenuItemClick(item5)"
                          >
                            <template #icon>
                              <menu-icon :url="item5.icon" />
                            </template>
                            <span>{{ item5.text }}</span>
                          </a-menu-item>
                        </template>
                      </a-sub-menu>
                      <a-menu-item
                        v-else
                        :key="item4.id"
                        @click="onMenuItemClick(item4)"
                      >
                        <template #icon>
                          <menu-icon :url="item4.icon" />
                        </template>
                        <span>{{ item4.text }}</span>
                      </a-menu-item>
                    </template>
                  </a-sub-menu>
                  <a-menu-item
                    v-else
                    :key="item3.id"
                    @click="onMenuItemClick(item3)"
                  >
                    <template #icon>
                      <menu-icon :url="item3.icon" />
                    </template>
                    <span>{{ item3.text }}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
              <a-menu-item
                v-else
                :key="item2.id"
                @click="onMenuItemClick(item2)"
              >
                <template #icon>
                  <menu-icon :url="item2.icon" />
                </template>
                <span>{{ item2.text }}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
          <a-menu-item
            v-else
            :key="item1.id"
            @click="onMenuItemClick(item1)"
          >
            <template #icon>
              <menu-icon :url="item1.icon" />
            </template>
            <span>{{ item1.text }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item
        v-else
        :key="item.id"
        @click="onMenuItemClick(item)"
      >
        <template #icon>
          <menu-icon :url="item.icon" />
        </template>
        <span>{{ item.text }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script src="./index.ts" lang="ts"></script>
