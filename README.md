
# Неделя 23. CSS в React

### Вопросы 

*1. Какую ошибку я допустила в примере примере?*
~~~
const myStyle = {
  width: 200,
  height: 50,
	fontSize: '1.5 em',
  backgroundColor: 'red',
};

const Button = () => (
  <button style={ myStyle }>Нажми меня</button>
) примере?
~~~ 
 наверное, нужно немножко поменять местами, но не уверена)
 ~~~
const Button = () => (
  const myStyle = {
  width: 200,
  height: 50,
  fontSize: '1.5 em',
  backgroundColor: 'red',
};
  <button style={ myStyle }>Нажми меня</button>
) примере?
~~~ 

*2. Какие есть способы работы со стилями в React?*

инлайновый метод, таблицы стилей css, модули css 

*3. Как будет выглядеть карточка товара, если ей передать аттрибут `addedToCart`===0?*

карточка останется без изменений (null  предполагает, что элемент при рендеренге будет пропущен)

*4. Какие еще проверки нужно было бы сделать для аттрибута `addedToCart`?*

Добавить, например, флаг isAvailable == true; или добавить обязательное уловие выбора размера

*5. Клиент попросил повесить тег "New" на товары из новой коллекции. Как это сделать, какой условный оператор выбрать?*

Выбрала &&, т.е. я добавила еще один элемент в карточку с классом NewCollection.

```
export default class Card extends React.Component {
  render() {
      const {title, price, description, NewCollection } = this.props;
      
      return (
        <div className="card">
            <div className="card-body">
                { NewCollection &&
                    <div className='NewCollection'>New</div>
                }
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <span className="card-price">${price}</span>
            </div>
        </div>
    );
}
}
```
*6. Какими тремя способами можно написать условный рендеринг?*

Используя логические выражения с if , используя тернарный оператор ? : , используя логический оператор &&

*7. Представьте, что вы пишете компонент логина. Если пользователь авторизован, то мы показываем его имя, а если нет, то даем возможность ввода логина и пароля. 
Какой код для этого нужно написать, если за авторизацию пользователя отвечает флаг isAutorized?*
```
const flag = true;
export default function App() {
    const isAutorized = flag;
  if (isAutorized)
  return (
    <div className='userName'>{userName}</div>
  )
  return <LoginForm />
}
```
*8. В чем преимущества использования препроцессоров? Какой есть еще способ использовать переменные, кроме $ в препроцессорах?*

Сокращение кода, возможность структурирования кода, легче вносить небольшие измения в структуру
Переменные, определенные встроенным модулем (через @)
