document.addEventListener('DOMContentLoaded', function(){

	new Vue({
		el: '#enigma',

		data: {
			time:    null,
			battery: 0.66,
		},

		computed: {

			timeHour() {
				return this.time ? this.time.format('h.mm') : '';
			},

			timeHemi() {
				return this.time ? this.time.format('A') : '';
			},

			timeDay() {
				return this.time ? this.time.format('D') : '';
			},

			timeWeek() {
				return this.time ? this.time.format('ddd') : '';
			},

			batteryPercentage() {
				return String( this.battery * 100 ) + '%';
			}

		},

		/*html*/
		template: `<article id="enigma">

			<div class="bottom-bar">

				<div class="bottom-bar-left">

					<section class="time widget">

						<div class="time-short">
							<span class="time-hour">{{timeHour}}</span>
							<span class="time-hemi">{{timeHemi}}</span>
						</div>

						<div class="time-long">
							<span class="time-day">{{timeDay}}</span>
							<span class="time-week">{{timeWeek}}</span>
						</div>

					</section>

				</div>

				<div class="bottom-bar-right">

					<section class="widget"><i class="fas fa-fw fa-cloud-moon"></i></section>
					<section class="widget"><i class="fas fa-fw fa-cog"></i></section>
					<section class="widget"><i class="fas fa-fw fa-battery-full fa-rotate-270"></i></section>

				</div>

			</div>
			
		</article>`,

		mounted() {
			this.updateTime();
			this.updateBattery();
			this.startTimer();
		},

		methods: {

			startTimer() {

				setTimeout(() => {
					this.updateTime();
					this.startTimer();
				}, 1000);

			},

			updateTime() {
				this.time = dayjs();
			},

			updateBattery() {
				navigator.getBattery()
				.then((battery) => {
					this.battery = battery.level;
				});
			}

		},

	});
	
});
