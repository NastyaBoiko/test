# practice 2
Цель работы: закрепление практических навыков работы с классами и объектами.
Формируемые
компетенции:
ПК
информационной системы в соответствии с техническим заданием», ПК 5.1 «Собирать исходные
данные для разработки проектной документации на информационную систему»; ПК 5.2
«Разрабатывать
проектную
документацию
соответствии с требованиями заказчика»

Задача:
Реализовать простую игру. Создать две «армии» с юнитами, количество юнитов в
армии задает сам студент. У каждого юнита имеет запас жизни, равный 100 и статус
«active». Каждому юниту при создании задается случайным числом от 5 до 40 уровень
урона, который он может нанести. Удары юниты с каждой «армии» наносятся поочередно,
причем какой юнит и по какому наносит урон выбирается случайно. Удары могут
наносить только юниты со статусом «active» по юнитам с аналогичным статусом. При
уровне жизни юнита 0 или меньше, юнит выбывает из игры, но остается в армии со
статусом «destroy». Как только в любой армии у всех юнитов будет статус «destroy», игра
заканчивается.

Всего проходит три раунда. В новых раундах: армии и юниты заново не создаются,
юниты восстанавливают уровень жизни до 100 со статусом «active».
Все ходы в каждом раунде должны быть «залогированы» в консоль браузера. На
страницу, должна быть выведена информация (alert): какая армия победила в раунде с
выводом, с общей статистикой по юнитам двух армий. Так же через alert должна быть
выведена общая информация по игре по истечении 3-х раундов.
Игра должна быть реализована с помощью 3-х объектов: юнита, армии и игры. Все
объекты создаются через функции конструкторы. В объект игры, должны быть переданы
2 армии.