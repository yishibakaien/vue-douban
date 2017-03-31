import Vue from 'vue';
import VueRouter from 'vue-router';
import movices from '@/components/movices/movices';
import hot from '@/components/hot/hot';
import newandhotsearch from '@/components/new_and_hotsearch/new_and_hotsearch';
import supplyandbuy from '@/components/supply_and_buy/supply_and_buy';
import storemanagement from '@/components/store_management/store_management';
import settledmerchants from '@/components/settled_merchants/settled_merchants';
import news from '@/components/news/news';
import finding from '@/components/finding/finding';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: movices},
  {path: '/hot', component: hot},
  {path: '/supplyandbuy', component: supplyandbuy},
  {path: '/newandhotsearch', component: newandhotsearch},
  {path: '/storemanagement', component: storemanagement},
  {path: '/settledmerchants', component: settledmerchants},
  {path: '/finding', component: finding},
  {path: '/news', component: news},
  {path: '/movices', component: movices}
];

export default new VueRouter({
  linkActiveClass: 'active',
  routes
});
