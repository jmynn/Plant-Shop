import VisitSection from '@/components/VisitSection.vue';
import { PATHS } from '@/data';
import TestView from '@/views/TestView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutSection from '../components/AboutSection.vue';
import EmptyItem from '@/components/EmptyItem.vue';

const router = createRouter({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link-exact',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // /
      path: PATHS.HOME,
      name: 'home',
      component: HomeView
    },
    {
      // /test
      path: PATHS.TEST,
      component: TestView,
      children: [
        {
          // /test/nested
          path: 'nested',
          name: 'nested',
          component: VisitSection
        },
        {
          // /test/:id
          path: `${PATHS.TEST}/:id`,
          children: [
            {
              // /test/:id/nested
              path: 'nested',
              name: 'nested id',
              components: {
                default: AboutSection,
                secondView: EmptyItem
              }
            }
          ]
        }
      ]
    },
    // {
    //   // /test/:id
    //   path: `${PATHS.TEST}/:id`,
    //   component: TestView,
    //   children: [
    //     {
    //       // /test/:id/nested
    //       path: 'nested',
    //       name: 'nested id',
    //       component: AboutSection
    //     },
    //   ]
    // },
    {
      // /test/nonexistent
      path: PATHS.TEST_NONEXISTENT,
      name: 'nonexistent',
      redirect: PATHS.TEST_NESTED
    }
    // {
    //   // /parent
    //   path: PATHS.PARENT,
    //   children: [
    //     {
    //       // /parent
    //       path: '',
    //       component: TestView
    //     },
    //     {
    //       // /parent/nested
    //       path: PATHS.PARENT_NESTED,
    //       name: 'nested',
    //       component: VisitSection
    //     }
    //   ]
    // }
  ]
});

export default router;
