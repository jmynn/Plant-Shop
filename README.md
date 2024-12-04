### Тестовый, неадаптивный Vue проект.

Здесь только: defineProps, defineEmits(типизация $emit, @), ref, routerLink, defineAsyncComponent, v-for, v-if, v-show, , computed, v-bind(:), reactive, , watchEffect.

#### Временные наблюдения, не все верные, скорее всего:

- Если в компоненте метод будет использоваться в скрипте - `defineProps`, а если планируется использовать метод при каком-то опредеделенном событии (click, change, др.) - `defineEmits`
- `v-if` приоритет больше, чем у `v-for`, если они на одном уровне
- пустая оболочка - `template`
- передать объект пропсом, не разворачивая его на каждое отдельно свойство вручную -** v-bind="something"**
- у **`reactive`** нет value
- для динамического импорта компонентов, помимо import(), - **`defineAsyncComponent`**
- ` v-show` работает только с display: none
- если при изменениии каких-то зависимостей нужно менять значение стейта(ref), то это стоит делать внутри **`watchEffect`**, а не нагромождать конструции computed
- **`watcheffect`** работает при монтировании
- типизация** `defineProps`, `defineEmits`** и др. с typescript происходит через женерик
- Удобный тип для **`defineEmits`**, он хотя бы показывает названия всех эмитов, которые получает компонент, когда делаешь вызов через `$emit`

```ts
type Emits = {
  changeOption: [sort: TypeSortPlants];
};
```

- Результат defineEmits можно получить в переменную, но использовать конкретно эту переменную надо только в **скрипте**, а не в template. Для разметки отдельный вызов через **`$emit()`**
- При вызове `$emit()` не надо городить стрелочную функцию для получения ивента, для это есть **`$event`**

- Можно делать классы, которые работают в зависимости от каких-то условий, как, например, класс *active* будет на элементе только тогда, когда *isActive* станет равно *true*
```ts
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```
```ts
// КЛАССЫ
const class2 = "class"
"class"
{class: isClass, class2: isClass2}
["class"]
[{class: isClass}, 'class2', class2]
```
- `$attrs.class` для того, чтобы повесить класс извне на определенный элемент, а не на родительский, на какой он повесится сам
![alt text]({9636C41D-4435-4C3D-8C99-AE32E07B4630}.png)


- 

##### Vue-router

- При обозначении вложенных(динамических) маршрутов в роутере, поле **`name`** может быть только у **потомков**
- `<router-view /> - <slot />` для роутера (<RouterView /> - vue-router)
- в таком случае нет layout'a, то есть просто вставляется компонент

```ts
  {
    path: PATHS.PARENT,
    children: [
      {
        path: '',
        component: TestView
      },
      {
        path: PATHS.PARENT_NESTED,
        name: 'nested',
        component: VisitSection
      }
    ]
  }
```

- можно использовать **`name`** в ссылке маршрута, вместо указания явного path - :to="{name: 'nested'}"
- `useRouter`, **router.push({path: '', params: {}} ) не будет работать, path и params несовместимы**. Вместо этого нужно использовать `name` + `params`
- `<router-view name="helper" /> ` - можно задавать имя, чтобы отдельно в каждый блок router-view выводить определенный компонент, чтобы избежать использования лишнего template-компонента. **По умолчанию имя - `default`**.

```ts
{
  path: '/settings',
  component: UserSettings,
  children: [
    {
      path: 'emails',
      component: UserEmailsSubscriptions
    },
    {
      path: 'profile',
      components: {
        default: UserProfile,
        helper: UserProfilePreview
      }
    }
  ]
}
```
- Если используется `redirect`, то можно не заполнять поле component, поскольку оно достигнуто не будет **(существует еще alias)**
```ts
redirect: to => {
  // the function receives the target route as the argument
  // we return a redirect path/location here.
  return { path: '/something', query: { q: to.params.searchText } }
},
```
- `name` роута должно быть уникальным во всем роутере
- при создании **вложенных** маршрутов, нужно помнить, что / делает путь главным, например, пропуская динамический параметр. 
```ts
/test/:id
  /nested -> /test/nested
  nested -> /test/id/nested
```
- **динамический** параметр можно получать пропсом в компоненте, - необходим `defineProps` описанный в компоненте (название пропса должно совпадать с именем динамического сегмента), и параметр `props: true` в роуте(для каждого router-view отдельно можно указать получение пропсов)
```ts
{
  path: '/user/:id',
  components: { default: User, sidebar: Sidebar },
  props: { default: true, sidebar: false }
}
```
- можно менять класс активных ссылок в роутере
- **404 страница**
```ts
{ path: '/:pathMatch(.*)', component: NotFoundComponent }
```